// Generated by CoffeeScript 1.12.7
(function() {
  var c, canvas, imageArray, initialize, redraw, resizeCanvas;

  canvas = document.querySelector("canvas");

  c = canvas.getContext("2d");

  imageArray = [
    {
      "src": "./Images/sph4.svg",
      "id": "0"
    }, {
      "src": "./Images/bsph4.svg",
      "id": "1"
    }, {
      "src": "./Images/oct3.svg",
      "id": "2"
    }, {
      "src": "./Images/sphi4.svg",
      "id": "3"
    }
  ];

  $(document).ready(function() {
    initialize();
    return this.canvasColor = '#666666';
  });

  initialize = function() {
    $(window).bind('resize', resizeCanvas);
    return resizeCanvas();
  };

  resizeCanvas = function() {
    canvas.height = 300;
    if ($(window).width() < 900) {
      c.strokeStyle = "#666666";
      canvas.width = 300;
      return redraw();
    } else {
      canvas.width = 570;
      c.strokeStyle = "#666666";
      return redraw();
    }
  };

  redraw = function() {
    return $.getJSON('JSON/sph4.json', function(data) {
      return $.each(data, function(index, value) {
        var idcord, topHeight, xcord, ycord;
        xcord = data[index].x;
        ycord = data[index].y;
        idcord = data[index].id;
        topHeight = 25 + idcord * 40;
        $("a.CompositionImage_link[pivotpoint=" + idcord + "]").css({
          "top": ycord - 7,
          "left": xcord - 7
        });
        c.beginPath();
        c.moveTo(xcord, ycord);
        c.lineTo(265, topHeight);
        if ($(window).width() < 900) {
          c.lineTo(340, topHeight);
        } else {
          c.fillStyle = "#666666";
          if (idcord === 0) {
            c.lineTo(550, topHeight);
            c.stroke();
            c.closePath();
            c.beginPath();
            c.arc(550, topHeight, 5, 0, 2 * Math.PI, false);
            c.fill();
          } else {
            c.lineTo(500, topHeight);
          }
        }
        return c.stroke();
      });
    });
  };

  $('.Label_listItem , .CompositionImage_link').on("click", function() {
    var activePoint, className, compElement, compositionSec, elements, i, j, len, len1, pivotpointList;
    $('.Label_listItem').removeClass('active');
    $('.CompositionImage_link').removeClass('active');
    className = $(this).attr('class');
    activePoint = $(this).attr('pivotpoint');
    if (className === 'Label_listItem') {
      pivotpointList = $('.Composition_image').find('.CompositionImage_link');
    } else {
      pivotpointList = $('.Label').find('.Label_listItem');
    }
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if (activePoint === $(elements).attr("pivotpoint")) {
        $(elements).addClass('active');
        $(this).toggleClass('active');
      }
    }
    compositionSec = $('.Component_details');
    for (j = 0, len1 = compositionSec.length; j < len1; j++) {
      compElement = compositionSec[j];
      if (activePoint === $(compElement).attr('relpoint')) {
        $(compElement).removeClass("Component_details--disable");
      } else {
        $(compElement).addClass("Component_details--disable");
      }
    }
    if ($(window).width() > 900) {
      return $.getJSON('JSON/sph4.json', function(data) {
        return $.each(data, function(index, value) {
          var idcord, topHeight;
          idcord = data[index].id.toString();
          topHeight = 25 + idcord * 40;
          if (activePoint === idcord) {
            c.beginPath();
            c.moveTo(500, topHeight);
            c.lineTo(550, topHeight);
            c.arc(550, topHeight, 5, 0, 2 * Math.PI, false);
            c.fillStyle = "#666666";
            c.fill();
            return c.stroke();
          } else {
            return c.clearRect(500, topHeight - 10, 100, 20);
          }
        });
      });
    }
  });

  $('.CrossButton , .Component_heading h3').on('click', function() {
    var activePoint, className, elements, i, j, labelList, len, len1, pivotpointList;
    className = $(this).attr('class');
    activePoint = $(this).parent().parent().attr('relpoint');
    labelList = $('.Composition_image').find('.Label_listItem');
    pivotpointList = $('.Composition_image').find('.CompositionImage_link');
    if (className === 'CrossButton') {
      $(this).parent().parent().addClass('Component_details--disable');
      $(this).parent().find(".Component_wrapper").css({
        "display": "none"
      });
    } else {
      $(this).parent().parent().removeClass("Component_details--disable");
      $(this).parent().parent().siblings('div').addClass("Component_details--disable");
    }
    for (i = 0, len = pivotpointList.length; i < len; i++) {
      elements = pivotpointList[i];
      if (activePoint === $(elements).attr('pivotpoint')) {
        if ($(this).attr('class') === 'CrossButton') {
          $(elements).removeClass('active');
        } else {
          $(elements).addClass('active');
        }
      } else {
        $(elements).removeClass('active');
      }
    }
    for (j = 0, len1 = labelList.length; j < len1; j++) {
      elements = labelList[j];
      if (activePoint === $(elements).attr('pivotpoint')) {
        if ($(this).attr('class') === 'CrossButton') {
          $(elements).removeClass('active');
        } else {
          $(elements).addClass('active');
        }
      } else {
        $(elements).removeClass('active');
      }
    }
    return $.getJSON('JSON/sph4.json', function(data) {
      return $.each(data, function(index, value) {
        var idcord, topHeight;
        idcord = data[index].id;
        topHeight = 25 + idcord * 40;
        return c.clearRect(500, topHeight - 10, 100, 20);
      });
    });
  });

}).call(this);
