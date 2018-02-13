// Generated by CoffeeScript 1.12.4
(function() {
  $(document).ready(function() {
    var c, canvas, pivotpoints, screenWidth;
    pivotpoints = [
      {
        id: 0,
        x: 129,
        y: 109
      }, {
        id: 1,
        x: 182,
        y: 126
      }, {
        id: 2,
        x: 205,
        y: 146
      }, {
        id: 3,
        x: 210,
        y: 174
      }
    ];
    canvas = document.querySelector("canvas");
    c = canvas.getContext("2d");
    screenWidth = $(window).width();
    if (screenWidth < 900) {
      canvas.height = 300;
      canvas.width = 300;
    } else {
      canvas.height = 300;
      canvas.width = 570;
    }
    $.each(pivotpoints, function(index, value) {
      var idcord, topHeight, xcord, ycord;
      xcord = pivotpoints[index].x;
      ycord = pivotpoints[index].y;
      idcord = pivotpoints[index].id;
      topHeight = 25 + idcord * 40;
      c.beginPath();
      c.strokeStyle = "#666666";
      c.moveTo(xcord, ycord);
      if (screenWidth < 900) {
        c.lineTo(265, topHeight);
        c.lineTo(340, topHeight);
        return c.stroke();
      } else {
        if (idcord === 0) {
          c.lineTo(265, topHeight);
          c.lineTo(550, topHeight);
          c.stroke();
          c.closePath();
          c.beginPath();
          c.arc(550, topHeight, 5, 0, 2 * Math.PI, false);
          c.fillStyle = '#666666';
          c.fill();
          return c.stroke();
        } else {
          c.lineTo(265, topHeight);
          c.lineTo(500, topHeight);
          return c.stroke();
        }
      }
    });
    $('.Label_listItem').on("click", function() {
      var activePoint, compElement, compositionSec, elements, i, j, len, len1, pivotpointList;
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
      compositionSec = $('.Component_info_details');
      for (j = 0, len1 = compositionSec.length; j < len1; j++) {
        compElement = compositionSec[j];
        if (activePoint === $(compElement).attr('relpoint')) {
          $(compElement).removeClass("Component_info_details--disable");
        } else {
          $(compElement).addClass("Component_info_details--disable");
        }
      }
      if (screenWidth > 900) {
        return $.each(pivotpoints, function(index, value) {
          var idcord, topHeight;
          idcord = pivotpoints[index].id.toString();
          topHeight = 25 + idcord * 40;
          if (activePoint === idcord) {
            c.beginPath();
            c.moveTo(500, topHeight);
            c.lineTo(550, topHeight);
            c.arc(550, topHeight, 5, 0, 2 * Math.PI, false);
            c.fillStyle = '#666666';
            c.fill();
            return c.stroke();
          } else {
            return c.clearRect(500, topHeight - 10, 100, 20);
          }
        });
      }
    });
    $('.CrossButton').on('click', function(e) {
      var activePoint, elements, i, idcord, j, labelList, len, len1, pivotpointList, topHeight;
      e.preventDefault();
      $(this).parent().parent().addClass('Component_info_details--disable');
      $(this).parent().find(".Components_wrapper").css({
        "display": "none"
      });
      pivotpointList = $('.Composition_image').find('.Composition_image_link');
      activePoint = $(this).parent().parent().attr('relpoint');
      for (i = 0, len = pivotpointList.length; i < len; i++) {
        elements = pivotpointList[i];
        if (activePoint === $(elements).attr('pivotpoint')) {
          $(elements).removeClass('active');
        }
      }
      labelList = $('.Composition_image').find('.Label_listItem');
      for (j = 0, len1 = labelList.length; j < len1; j++) {
        elements = labelList[j];
        if (activePoint === $(elements).attr('pivotpoint')) {
          $(elements).removeClass('active');
        }
      }
      idcord = pivotpoints[activePoint].id;
      topHeight = 25 + idcord * 40;
      return c.clearRect(500, topHeight - 10, 100, 20);
    });
    $('.Composition_image_link').on("click", function() {
      var activePoint, compElement, compositionSec, elements, i, j, len, len1, pivotpointList;
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
      compositionSec = $('.Component_info_details');
      for (j = 0, len1 = compositionSec.length; j < len1; j++) {
        compElement = compositionSec[j];
        if (activePoint === $(compElement).attr('relpoint')) {
          $(compElement).removeClass("Component_info_details--disable");
        } else {
          $(compElement).addClass("Component_info_details--disable");
        }
      }
      if (screenWidth > 900) {
        return $.each(pivotpoints, function(index, value) {
          var idcord, topHeight;
          idcord = pivotpoints[index].id.toString();
          topHeight = 25 + idcord * 40;
          if (activePoint === idcord) {
            c.beginPath();
            c.moveTo(500, topHeight);
            c.lineTo(550, topHeight);
            c.arc(550, topHeight, 5, 0, 2 * Math.PI, false);
            c.fillStyle = '#666666';
            c.fill();
            return c.stroke();
          } else {
            return c.clearRect(500, topHeight - 10, 100, 20);
          }
        });
      }
    });
    return $(".Components_heading h3").on("click", function() {
      var activePoint, elements, i, j, labelList, len, len1, pivotpointList, results;
      $(this).parent().parent().removeClass("ComponentInfo_details--disable");
      $(this).parent().parent().siblings('div').addClass("ComponentInfo_details--disable");
      pivotpointList = $('.Composition_image').find('.Composition_image_link');
      activePoint = $(this).parent().parent().attr('relpoint');
      for (i = 0, len = pivotpointList.length; i < len; i++) {
        elements = pivotpointList[i];
        if (activePoint === $(elements).attr('pivotpoint')) {
          $(elements).addClass('active');
        } else {
          $(elements).removeClass('active');
        }
      }
      labelList = $('.Composition_image').find('.Label_listItem');
      results = [];
      for (j = 0, len1 = labelList.length; j < len1; j++) {
        elements = labelList[j];
        if (activePoint === $(elements).attr('pivotpoint')) {
          results.push($(elements).addClass('active'));
        } else {
          results.push($(elements).removeClass('active'));
        }
      }
      return results;
    });
  });

}).call(this);
