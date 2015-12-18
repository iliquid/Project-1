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
            // $('.close-button-link').on('click', function(e) {
            // 	e.preventDefault();
            // 	$('#element_to_pop_up').bPopup().close();
            // }
            // 	);
        $('.close-button-link').on('click', function(e) {
            	e.preventDefault();
              $('#element_to_pop_up').bPopup().close();
              $(':input', '#jsValidate')
    						.not(':button, :submit, :reset, :hidden')
    						.val('')
    					$('input, textarea').removeClass('tooltip')
    					$('#add_title-error, #filename-error, #add-url-error, #add-desc-error').css({'display': 'none'})
             
            }
            	 
            
    );
       

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
  
$('.add-project-button').on('click', function(e) {
 	// e.preventDefault();
 	var isValid = $("#jsValidate").validate({
					errorElement: "div",
					errorClass: "tooltip",
					messages: {
					add_title: "Укажите название проекта",
					project_url: "Укажите URL проекта",
					project_desc: "Напишите краткое описание проекта",
					project_file: "Добавьте изображение проекта"
				}
				
		});
 	// if (!isValid == true) {
 	// 	$("#success").css({"display": "block"});
 	// }
})


// Валидация формы фидбеков с выводом тултипов


	$("#jsFeedbackValidate").validate({
			errorElement: "div",
			errorClass: "tooltip-feedback",
		messages: {
			username_name: "Пожалуйста, представьтесь",
			usermail: "Укажите свой электронный ящик",
			message_text: "Кратко о своем проекте",
			captcha_sym: "Без капчи ничего не выйдет"
				}
		});