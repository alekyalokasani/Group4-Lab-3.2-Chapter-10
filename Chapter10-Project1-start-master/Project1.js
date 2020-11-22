var currentFilter = {};

$(document).ready(function() {
    $('#thumbBox img').click(function() {
        $('#imgManipulated img').attr('src', $(this).attr('src').replace("small", "medium"));
        $('#imgManipulated figcaption').html(
        '<em>' + $(this).attr("title") + "</em></br>" + $(this).attr("alt"));
        currentFilter = {};
    });

    $('#resetFilters').click(function() {
        currentFilter = {};
        applyFilter();
    });

    function applyFilter() {
        var s = '';
        if('opacity' in currentFilter) {
            s += ' opacity(' + currentFilter['opacity'] + '%)';
        }
        if('saturate' in currentFilter) {
            s += ' saturate(' + currentFilter['saturate'] + '%)';
        }
        if('brightness' in currentFilter) {
            s += ' brightness(' + currentFilter['brightness'] + '%)';
        }
        if('hue-rotate' in currentFilter) {
            s += ' hue-rotate(' + currentFilter['hue-rotate'] + 'deg)';
        }
        if('grayscale' in currentFilter) {
            s += ' grayscale(' + currentFilter['grayscale'] + '%)';
        }
        if('blur' in currentFilter) {
            s += ' blur(' + currentFilter['blur'] + 'px)';
        }

        $("#imgManipulated img")
          .css('filter',s)
          .css('webkitFilter',s)
    }

    $('#sliderOpacity').on('change', function() {
        currentFilter['opacity'] = $(this).val();  
        $('#numOpacity').text($(this).val());
        applyFilter();
    });

    $('#sliderSaturation').on('change', function() {
        currentFilter['saturate'] = $(this).val(); 
        $('#numSaturation').text($(this).val());
        applyFilter();      
    });
    $('#sliderBrightness').on('change', function() {
        currentFilter['brightness'] = $(this).val();   
        $('#numBrightness').text($(this).val());
        applyFilter();      
    });
    $('#sliderHue').on('change', function() {
        currentFilter['hue-rotate'] = $(this).val();   
        $('#numHue').text($(this).val());
        applyFilter();      
    });
    $('#sliderGray').on('change', function() {
        currentFilter['grayscale'] = $(this).val();    
        $('#numGray').text($(this).val());
        applyFilter();      
    });
    $('#sliderBlur').on('change', function() {
        currentFilter['blur'] = $(this).val(); 
        $('#numBlur').text($(this).val());
        applyFilter();      
    });

});