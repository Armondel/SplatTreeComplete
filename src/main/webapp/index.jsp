<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<script type="text/javascript" src=resources/js/jquery-3.2.1.min.js></script>
<script type="text/javascript" src=resources/js/control.js></script>
<script type="text/javascript" src=resources/js/dragndrop.js></script>
<link rel="stylesheet" href=resources/css/font-awesome-4.7.0/css/font-awesome.min.css>
<link rel="stylesheet" href=resources/css/bootstrap.min.css>
<link rel="stylesheet" href=resources/css/styleSheet.css>


<html>
<head>
    <title>Tree View</title>
</head>
<body>
<div class="row justify-content-md-center">
    <div class="col-md-auto4">
        <ul>
            <li>
                <div>
  <span class="fa fa-folder" ondragenter='return dragEnter(event)' ondragover='return dragOver(event)'
        ondrop='return dragDrop(event)'>
    <a id="1" href='#'>root</a>
  </span>
                    <div class="preload">
                        <ul>

                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    <div class="col-xs-4">
        <button type="button" class="btn btn-primary" id="nCreate">Create</button>
        <button type="button" class="btn btn-info" id="nRename">Rename</button>
        <button type="button" class="btn btn-danger" id="nDelete">Delete</button>
    </div>
</div>
</body>
</html>
