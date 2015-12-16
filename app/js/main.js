// Плейсхолдеры для IE8
$(document).ready(
	function(){
		if(!Modernizr.input.placeholder) {
			$('input, textarea').placeholder();
	}
});


// Вызов модального окна по клику
    (function($) {

         // DOM Ready
        $(function() {

            // Binding a click event
            // From jQuery v.1.7.0 use .on() instead of .bind()
            $('#my-button').bind('click', function(e) {

                // Prevents the default action to be triggered. 
                e.preventDefault();

                // Triggering bPopup when click event is fired
                $('#element_to_pop_up').bPopup();

            });

        });

    })(jQuery);

// Подставляем имя файла в инпут
$(document).ready( function() {
    				$("#file").change(function(){
         		var filename = $(this).val().replace(/.*\\/, "");
         		$("#filename").val(filename);
    });
});

//Валидация формы добавления проекта с выводом тултипов
	$("#jsValidate").validate({
			errorElement: "div",
			errorClass: "tooltip",
		messages: {
			add_title: "Укажите название проекта",
			project_url: "Укажите URL проекта",
			project_desc: "Напишите краткое описание проекта",
			project_file: "Добавьте изображение проекта"
		}
		});