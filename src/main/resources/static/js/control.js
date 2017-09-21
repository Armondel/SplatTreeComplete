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
            alert('AJAX query going here');
        }
    })

});

//TODO: Fix id assignment, add AJAX to all buttons
//create button
$(function () {
    $('#nCreate').click(function () {
        var node = $('.selected');
        if (!node.length) {
            alert('Choose parent node first!');
            return false;
        }
        var newId = 1;
        alert('tobi pizda: #' + newId);
        while ($('#' + newId).length) {
            newId++;
            alert('tobi pizda: #' + newId);
        }
        alert('New id will be ' + newId);
        var newName = prompt('Enter the name of new folder');
        if (newName !== null) {
            node.parent().next().children(':first').append(
                '<li>\n' +
                '              <span class="fa fa-folder" ondragenter="return dragEnter(event)" ondragover=\'return dragOver(event)\'\n' +
                '                    ondrop="return dragDrop(event)">\n' +
                '                <a id=\''+ newId + '\'\n' +
                '                   href=\'#\'\n' +
                '                   draggable=\'true\'\n' +
                '                   ondragstart=\'return dragStart(event)\'>'+ newName +'</a>\n' +
                '              </span>\n' +
                '                                            <div class="preload">\n' +
                '                                                <ul>\n' +
                '\n' +
                '                                                </ul>\n' +
                '                                            </div>\n' +
                '                                        </li>'
            );
            alert('AJAX query is coming');
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
            //Here comes some solid ajax shit
            alert('AJAX query not done yet');
        }
    })
});