/* BEGIN BUILD OBJ ARRAY FROM NAVBAR */

var navBarList = [];
$('.navbar-nav > li').each(function(){
  var navItem = {};
  navItem.text = $(this).find('a:first').text();
  navItem.url = $(this).find('a:first').attr('href');
  var targetStr = $(this).find('a:first').attr('target');
  if (typeof targetStr !== typeof undefined && targetStr !== false) {
    navItem.target = targetStr;
  } else {
    navItem.target = "_self";
  }
  
  navItem.subNavItems = [];
  $(this).find('ul li').each(function(){
    var subNavItem = {};
    subNavItem.text = $(this).find('a:first').text();
    subNavItem.url = $(this).find('a:first').attr('href');
    var subTargetStr = $(this).find('a:first').attr('target');
    if (typeof subTargetStr !== typeof undefined && subTargetStr !== false) {
      subNavItem.target = subTargetStr;
    } else {
      subNavItem.target = "_self";
    }
    navItem.subNavItems.push(subNavItem);
  });

  navBarList.push(navItem);
});

//var navBarJson = JSON.stringify(navBarList);
//console.log(navBarJson);

/* END BUILD OBJ ARRAY FROM NAVBAR */

/* BEGIN BUILD SITEMAP MARKUP FROM NAVBAR ARRAY */

var $siteMapTree = $("<ul>", {class: "treeMenu"});

$.each( navBarList, function( i, val ) {
  //alert( val.text + ", " + val.url );
  var $topLevListItem = $("<li>");
  var $topLevLink = null;
  var $topLevIcon = null;
  if (val.subNavItems.length > 0) {
    $topLevLink = $(document.createTextNode(" " + val.text));
    $topLevIcon = $("<i>", {class: "fa fa-folder"});
    $topLevListItem.append($topLevIcon);
    $topLevListItem.append($topLevLink);
    var $subDocTree = $("<ul>");
    $.each( val.subNavItems, function( j, subval ) {
      //alert( subval.text + ", " + subval.url );
      
      var $subLevListItem = $("<li>");
      $subLevLink = $("<a>, {href: subval.url, target: subval.target}");
      $subLevIcon = $("<i>", {class: "fa fa-file-o"});
      $subLevLink.append($subLevIcon);
      $subLevLink.append($(document.createTextNode(" " + subval.text)));
      $subLevListItem.append($subLevLink);
      $subDocTree.append($subLevListItem);
    });
    $topLevListItem.append($subDocTree);

  } else {
    $topLevLink = $("<a>", {href: val.url, target: val.target});
    $topLevIcon = $("<i>", {class: "fa fa-file-o"});
    $topLevLink.append($topLevIcon);
    $topLevLink.append($(document.createTextNode(" " + val.text)));
    $topLevListItem.append($topLevLink);
    
  }
  $siteMapTree.append($topLevListItem);

});

$('#treeContainer').append($siteMapTree);

/* END BUILD SITEMAP MARKUP FROM NAVBAR ARRAY */

/* BEGIN DOCTREE FUNCS */
$('#link_expandAllButton').on('click', function (e) {
	$('ul.treeMenu i.fa-folder').removeClass('fa fa-folder').addClass('fa fa-folder-open');
	$('ul.treeMenu ul').slideDown('slow');
	return false;
});

$('#link_collapseAllButton').on('click', function (e) {
	$('ul.treeMenu i.fa-folder-open').removeClass('fa fa-folder-open').addClass('fa fa-folder');
	$('ul.treeMenu ul').slideUp('slow');
	return false;
});

$('ul.treeMenu li').on('click', function (e) {
	if ($(this).has("ul").length) {
		if ($(this).find('ul:first').is(":visible")) {
			$(this).find('i:first').removeClass('fa fa-folder-open').addClass('fa fa-folder');
			$(this).find('ul:first').slideUp();
			e.stopPropagation();
		} else {
			$(this).find('ul:first').slideDown('slow');
			$(this).find('i:first').removeClass('fa fa-folder').addClass('fa fa-folder-open');
			e.stopPropagation();
		}
	} else {
		e.stopPropagation();
	}
});

//COMENNT OUT NEXT TWO LINES TO DEFAULT TO COLLAPSED
$('ul.treeMenu i.fa-folder').removeClass('fa fa-folder').addClass('fa fa-folder-open');
$('ul.treeMenu ul').slideDown('slow');
/* END DOCTREE FUNCS */