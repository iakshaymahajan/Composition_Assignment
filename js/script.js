// Generated by CoffeeScript 1.12.7
(function() {
  $(document).ready(function() {
    var c, canvas, screenWidth;
    canvas = document.querySelector("canvas");
    c = canvas.getContext("2d");
    screenWidth = $(window).width();
    $(window).on("resize", function() {});
    if (screenWidth < 769) {
      canvas.height = 300;
      canvas.width = 300;
      c.beginPath();
      c.moveTo(129, 109);
      c.lineTo(265, 25);
      c.lineTo(340, 25);
      c.moveTo(182, 126);
      c.lineTo(265, 65);
      c.lineTo(340, 65);
      c.moveTo(205, 146);
      c.lineTo(265, 105);
      c.lineTo(340, 105);
      c.moveTo(210, 174);
      c.lineTo(265, 145);
      c.lineTo(340, 145);
      return c.stroke();
    } else {
      canvas.height = 300;
      canvas.width = 550;
      c.beginPath();
      c.moveTo(129, 109);
      c.lineTo(265, 25);
      c.lineTo(500, 25);
      c.moveTo(182, 126);
      c.lineTo(265, 65);
      c.lineTo(500, 65);
      c.moveTo(205, 146);
      c.lineTo(265, 105);
      c.lineTo(500, 105);
      c.moveTo(210, 174);
      c.lineTo(265, 145);
      c.lineTo(500, 145);
      return c.stroke();
    }
  });

  $('.Label_listItem').on("click", function() {
    var activePoint, compElement, compositionSec, elements, i, j, len, len1, pivotpointList, results;
    $('.Label_listItem').removeClass('active');
    $('.Composition_image_link').removeClass('active');
    activePoint = $(this).attr('pivotpoint');
    pivotpointList = $('.Composition_image').find('.Composition_image_link');
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if (activePoint === $(elements).attr("pivotpoint")) {
        $(elements).addClass('active');
        $(this).toggleClass('active');
      }
    }
    compositionSec = $('.ComponentInfo_details');
    results = [];
    for (j = 0, len1 = compositionSec.length; j < len1; j++) {
      compElement = compositionSec[j];
      if (activePoint === $(compElement).attr('relpoint')) {
        results.push($(compElement).removeClass("ComponentInfo_details--disable"));
      } else {
        results.push($(compElement).addClass("ComponentInfo_details--disable"));
      }
    }
    return results;
  });

  $('.Composition_image_link').on("click", function() {
    var activePoint, compElement, compositionSec, elements, i, j, len, len1, pivotpointList, results;
    $('.Label_listItem').removeClass('active');
    $('.Composition_image_link').removeClass('active');
    activePoint = $(this).attr('pivotpoint');
    pivotpointList = $('.Label').find('.Label_listItem');
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if (activePoint === $(elements).attr("pivotpoint")) {
        $(elements).addClass('active');
        $(this).toggleClass('active');
      }
    }
    compositionSec = $('.ComponentInfo_details');
    results = [];
    for (j = 0, len1 = compositionSec.length; j < len1; j++) {
      compElement = compositionSec[j];
      if (activePoint === $(compElement).attr('relpoint')) {
        results.push($(compElement).removeClass("ComponentInfo_details--disable"));
      } else {
        results.push($(compElement).addClass("ComponentInfo_details--disable"));
      }
    }
    return results;
  });

  $('.CrossButton').on('click', function(e) {
    var elements, i, j, labelList, len, len1, pivotpointList, results;
    e.preventDefault();
    $(this).parent().parent().addClass('ComponentInfo_details--disable');
    $(this).parent().find(".Components_wrapper").css({
      "display": "none"
    });
    $(this).css({
      "display": "none"
    });
    pivotpointList = $('.Composition_image').find('.Composition_image_link');
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if ($(this).parent().parent().attr('relpoint') === $(elements).attr('pivotpoint')) {
        $(elements).removeClass('active');
      }
    }
    labelList = $('.Composition_image').find('.Label_listItem');
    results = [];
    for (j = 0, len1 = labelList.length; j < len1; j++) {
      elements = labelList[j];
      if ($(this).parent().parent().attr('relpoint') === $(elements).attr('pivotpoint')) {
        results.push($(elements).removeClass('active'));
      } else {
        results.push(void 0);
      }
    }
    return results;
  });

  $(".Components_heading h3").on("click", function() {
    var elements, i, j, labelList, len, len1, pivotpointList, results;
    $(this).parent().parent().removeClass("ComponentInfo_details--disable");
    $(this).parent().parent().siblings('div').addClass("ComponentInfo_details--disable");
    $(this).siblings('.CrossButton').css({
      "display": "block"
    });
    $(this).parent().parent().siblings('div').find('a').css({
      "display": "none"
    });
    pivotpointList = $('.Composition_image').find('.Composition_image_link');
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if ($(this).parent().parent().attr('relpoint') === $(elements).attr('pivotpoint')) {
        $(elements).addClass('active');
      } else {
        $(elements).removeClass('active');
      }
    }
    labelList = $('.Composition_image').find('.Label_listItem');
    results = [];
    for (j = 0, len1 = labelList.length; j < len1; j++) {
      elements = labelList[j];
      if ($(this).parent().parent().attr('relpoint') === $(elements).attr('pivotpoint')) {
        results.push($(elements).addClass('active'));
      } else {
        results.push($(elements).removeClass('active'));
      }
    }
    return results;
  });

}).call(this);
