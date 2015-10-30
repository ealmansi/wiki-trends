$( document ).ready(function() {

  $(".year-panel > .btn-group > .btn").click(function(){
    $(".year-panel > .btn-group > .btn").removeClass("active");
    $(this).addClass("active");
    $(".year-panel > .btn-group > .btn").removeClass("btn-primary");
    $(this).addClass("btn-primary");
  });

  $(".scoring-button").click(function(){
    $(".scoring-button").removeClass("active");
    $(this).addClass("active");
    $(".scoring-button").removeClass("btn-info");
    $(this).addClass("btn-info");
  });

  function updateRankings(config) {
    var period = null;
    switch (config.quarter) {
        case 1:
            period = config.year + "0101T010101Z" + "_" + config.year  +"0401T010101Z";
            break;
        case 2:
            period = config.year + "0401T010101Z" + "_" + config.year  +"0701T010101Z";
            break;
        case 3:
            period = config.year + "0701T010101Z" + "_" + config.year  +"1001T010101Z";
            break;
        default: // case 4:
            period = config.year + "1001T010101Z" + "_" + (config.year + 1)  +"0101T010101Z";
            break;
    }
    var scoringId = null;
    switch (config.scoring) {
        case "sum":
            scoringId = "ranking_by_revision_count_sum";
            break;
        case "max":
            scoringId = "ranking_by_revision_count_max";
            break;
        case "rel_max":
            scoringId = "ranking_by_revision_count_rel_max";
            break;
        default: // case "size_diffs"
            scoringId = "ranking_by_revision_size_diffs_sum_abs";
            break;
    }

    $.getJSON("rankings/" + scoringId + "_" + period + ".json", function (data) {
      $("#ranking").empty();
      var items = [];
      for (var i = 0; i < 20; i++) {
        var wikipediaLink = "https://en.wikipedia.org/?curid=" + data[i]["page_id"];
        var row = "";
        row = row + "<tr>"
        row = row + "<td><strong>" + (i + 1) + "</strong></td>"
        row = row + "<td>" + data[i]["page_id"] + "</td>"
        row = row + "<td>"
                      + "<a href='" + wikipediaLink + "' target='_blank'>" + data[i]["title"] + "</a>"
                  + "</td>"
        row = row + "<td>" + data[i]["score"].toFixed(2) + "</td>"
        row = row + "</tr>";
        $("#ranking").append(row);
      };
    });
  }

  function toPreviousQuarter(config) {
    if (config.quarter > 1) {
      --config.quarter;
    } else {
      if (config.year > 2005) {
        config.quarter = 4;
        --config.year;
      }
    }
  }

  function toNextQuarter(config) {
    if (config.quarter < 4) {
      ++config.quarter;
    } else {
      if (config.year < 2014) {
        config.quarter = 1;
        ++config.year;
      }
    }
  }

  function toPreviousYear(config) {
    if (config.year > 2005) {
      --config.year;
    }
  }

  function toNextYear(config) {
    if (config.year < 2014) {
      ++config.year;
    }
  }

  function clickQuarter(config) {
    $(".quarter-" + config.year + "-q" + config.quarter + "-button").click();
  }

  function clickScoring(config) {
    $(".scoring-" + config.scoring).click();
  }

  var config = {
    year: 2014,
    quarter: 4,
    scoring: "max"
  }

  $('.quarter-2005-q1-button').on('click', function() { config.year = 2005; config.quarter = 1; updateRankings(config); });
  $('.quarter-2005-q2-button').on('click', function() { config.year = 2005; config.quarter = 2; updateRankings(config); });
  $('.quarter-2005-q3-button').on('click', function() { config.year = 2005; config.quarter = 3; updateRankings(config); });
  $('.quarter-2005-q4-button').on('click', function() { config.year = 2005; config.quarter = 4; updateRankings(config); });
  $('.quarter-2006-q1-button').on('click', function() { config.year = 2006; config.quarter = 1; updateRankings(config); });
  $('.quarter-2006-q2-button').on('click', function() { config.year = 2006; config.quarter = 2; updateRankings(config); });
  $('.quarter-2006-q3-button').on('click', function() { config.year = 2006; config.quarter = 3; updateRankings(config); });
  $('.quarter-2006-q4-button').on('click', function() { config.year = 2006; config.quarter = 4; updateRankings(config); });
  $('.quarter-2007-q1-button').on('click', function() { config.year = 2007; config.quarter = 1; updateRankings(config); });
  $('.quarter-2007-q2-button').on('click', function() { config.year = 2007; config.quarter = 2; updateRankings(config); });
  $('.quarter-2007-q3-button').on('click', function() { config.year = 2007; config.quarter = 3; updateRankings(config); });
  $('.quarter-2007-q4-button').on('click', function() { config.year = 2007; config.quarter = 4; updateRankings(config); });
  $('.quarter-2008-q1-button').on('click', function() { config.year = 2008; config.quarter = 1; updateRankings(config); });
  $('.quarter-2008-q2-button').on('click', function() { config.year = 2008; config.quarter = 2; updateRankings(config); });
  $('.quarter-2008-q3-button').on('click', function() { config.year = 2008; config.quarter = 3; updateRankings(config); });
  $('.quarter-2008-q4-button').on('click', function() { config.year = 2008; config.quarter = 4; updateRankings(config); });
  $('.quarter-2009-q1-button').on('click', function() { config.year = 2009; config.quarter = 1; updateRankings(config); });
  $('.quarter-2009-q2-button').on('click', function() { config.year = 2009; config.quarter = 2; updateRankings(config); });
  $('.quarter-2009-q3-button').on('click', function() { config.year = 2009; config.quarter = 3; updateRankings(config); });
  $('.quarter-2009-q4-button').on('click', function() { config.year = 2009; config.quarter = 4; updateRankings(config); });
  $('.quarter-2010-q1-button').on('click', function() { config.year = 2010; config.quarter = 1; updateRankings(config); });
  $('.quarter-2010-q2-button').on('click', function() { config.year = 2010; config.quarter = 2; updateRankings(config); });
  $('.quarter-2010-q3-button').on('click', function() { config.year = 2010; config.quarter = 3; updateRankings(config); });
  $('.quarter-2010-q4-button').on('click', function() { config.year = 2010; config.quarter = 4; updateRankings(config); });
  $('.quarter-2011-q1-button').on('click', function() { config.year = 2011; config.quarter = 1; updateRankings(config); });
  $('.quarter-2011-q2-button').on('click', function() { config.year = 2011; config.quarter = 2; updateRankings(config); });
  $('.quarter-2011-q3-button').on('click', function() { config.year = 2011; config.quarter = 3; updateRankings(config); });
  $('.quarter-2011-q4-button').on('click', function() { config.year = 2011; config.quarter = 4; updateRankings(config); });
  $('.quarter-2012-q1-button').on('click', function() { config.year = 2012; config.quarter = 1; updateRankings(config); });
  $('.quarter-2012-q2-button').on('click', function() { config.year = 2012; config.quarter = 2; updateRankings(config); });
  $('.quarter-2012-q3-button').on('click', function() { config.year = 2012; config.quarter = 3; updateRankings(config); });
  $('.quarter-2012-q4-button').on('click', function() { config.year = 2012; config.quarter = 4; updateRankings(config); });
  $('.quarter-2013-q1-button').on('click', function() { config.year = 2013; config.quarter = 1; updateRankings(config); });
  $('.quarter-2013-q2-button').on('click', function() { config.year = 2013; config.quarter = 2; updateRankings(config); });
  $('.quarter-2013-q3-button').on('click', function() { config.year = 2013; config.quarter = 3; updateRankings(config); });
  $('.quarter-2013-q4-button').on('click', function() { config.year = 2013; config.quarter = 4; updateRankings(config); });
  $('.quarter-2014-q1-button').on('click', function() { config.year = 2014; config.quarter = 1; updateRankings(config); });
  $('.quarter-2014-q2-button').on('click', function() { config.year = 2014; config.quarter = 2; updateRankings(config); });
  $('.quarter-2014-q3-button').on('click', function() { config.year = 2014; config.quarter = 3; updateRankings(config); });
  $('.quarter-2014-q4-button').on('click', function() { config.year = 2014; config.quarter = 4; updateRankings(config); });

  $('.scoring-sum').on('click', function() { config.scoring = "sum"; updateRankings(config); });
  $('.scoring-max').on('click', function() { config.scoring = "max"; updateRankings(config); });
  $('.scoring-rel-max').on('click', function() { config.scoring = "rel_max"; updateRankings(config); });
  $('.scoring-size-diffs').on('click', function() { config.scoring = "size_diffs"; updateRankings(config); });

  $('.previous-quarter-button').on('click', function() { toPreviousQuarter(config); clickQuarter(config); });
  $('.next-quarter-button').on('click', function() { toNextQuarter(config); clickQuarter(config); });

  $('.previous-year-button').on('click', function() { toPreviousYear(config); clickQuarter(config); });
  $('.next-year-button').on('click', function() { toNextYear(config); clickQuarter(config); });

  clickQuarter(config);
  clickScoring(config);
});

