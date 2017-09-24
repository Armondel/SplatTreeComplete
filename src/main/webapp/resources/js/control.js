//Tree view open/close + lazy load
$(function () {
    $(document).on('dblclick','span',function () {
        var sp = $(this);
        var clss;
        if ($(this).attr("class") === "fa fa-folder") {
            clss = 'fa fa-folder-open';
        }
        else {
            clss = 'fa fa-folder';

        }
        var nul = $(this).next("div");
        if (nul.hasClass("preload")) {
            $(this).attr('class', 'fa fa-spinner');
            $.ajax({
                type: 'GET',
                url: '/findByParent',
                data: {id: $(this).children(':first').attr( "id" )},
                dataType: 'json',
                success: function(response){
                    response.forEach(function (item) {
                        $('.selected').parent().next().children(':first').append(
                            '<li>\n' +
                            '              <span class="fa fa-folder" ondragenter="return dragEnter(event)" ondragover=\'return dragOver(event)\'\n' +
                            '                    ondrop="return dragDrop(event)">\n' +
                            '                <a id=\''+ item.id + '\'\n' +
                            '                   href=\'#\'\n' +
                            '                   draggable=\'true\'\n' +
                            '                   ondragstart=\'return dragStart(event)\'>'+ item.name +'</a>\n' +
                            '              </span>\n' +
                            '                                            <div class="preload">\n' +
                            '                                                <ul>\n' +
                            '\n' +
                            '                                                </ul>\n' +
                            '                                            </div>\n' +
                            '                                        </li>'
                        );
                    })
                }
            });
            window.setTimeout(function () {
                sp.attr('class', clss);
                nul.removeClass("preload");
            }, 1500);

        }
        else {
            sp.attr('class', clss);
            nul.toggle();
        }
    })
});

//Selection and deselection
$(function () {
    $('body').on('click',
        function (ev) {
            if ($(ev.target).is('a')) {
                if (!$(ev.target).hasClass('selected')) {
                    $('a').removeClass('selected');
                    $(ev.target).addClass('selected');
                }
            }
            else {
                if (!$(ev.target).is('button')) {
                    $('a').removeClass('selected');
                }
            }
        });
});

//rename button
$(function () {
    $('#nRename').click(function () {
        var node = $('.selected');
        if (!node.length) {
            alert('No nodes selected');
            return false;
        }
        if (node.attr('id') === '0') {
            alert('Root node cannot be renamed');
            return false;
        }
        var newName = prompt('Please enter new folder name');
        if (newName !== null) {
            node.text(newName);
            $.ajax({
                type: 'POST',
                url: '/rename',
                data: {id: node.attr('id'), name: newName},
                success: function(){
                    alert('Node was successfully renamed')
                }
            })
        }
    })

});

//create button
$(function () {
    $('#nCreate').click(function () {
        var node = $('.selected');
        if (!node.length) {
            alert('Choose parent node first!');
            return false;
        }
        var newName = prompt('Enter the name of new folder');
        if (newName !== null) {

            $.ajax({
                type: 'POST',
                url: '/add',
                data: {name: newName, parent: node.attr('id')},
                dataType: 'json',
                success: function(response){
                    node.parent().next().children(':first').append(
                        '<li>\n' +
                        '              <span class="fa fa-folder" ondragenter="return dragEnter(event)" ondragover=\'return dragOver(event)\'\n' +
                        '                    ondrop="return dragDrop(event)">\n' +
                        '                <a id=\''+ response.id + '\'\n' +
                        '                   href=\'#\'\n' +
                        '                   draggable=\'true\'\n' +
                        '                   ondragstart=\'return dragStart(event)\'>'+ response.name +'</a>\n' +
                        '              </span>\n' +
                        '                                            <div class="preload">\n' +
                        '                                                <ul>\n' +
                        '\n' +
                        '                                                </ul>\n' +
                        '                                            </div>\n' +
                        '                                        </li>'
                    );
                    alert('Node was successfully added');
                }
            });

        }
        else {
            alert('You must enter the name');
            return false;
        }
    })
});

//delete button
$(function () {
    $('#nDelete').click(function () {
        var node = $('.selected');
        if (!node.length) {
            alert('No nodes selected');
            return false;
        }
        if (node.attr('id') === '0') {
            alert('You cannot delete root node');
            return false;
        }
        var conf = confirm('Approve delete of selected item. All child folders will be deleted either.');
        if (conf) {
            node.closest('li').remove();
            $.ajax({
                type: 'POST',
                url: '/delete',
                data: {id: node.attr('id')},
                success: function(){
                    alert('Node branch was successfully deleted');
                }
            })
        }
    })
});