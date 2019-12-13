let selectedLanguage;

/**
 * Returns file size.
 *
 * @author Guilherme da Silva Martin
 */
function getFileSize() {
  let text = codeEditor.getValue();

  return text.length;
}

/**
 * Returns the total rows in the editor.
 *
 * @author Guilherme da Silva Martin
 */
function getTotalLines() {
  const text = codeEditor.getValue();
  const lines = (text.match(/\n/g) || '').length + 1;

  return lines;
}

/**
 * Returns the language code uses.
 *
 * @author Guilherme da Silva Martin
 */
function getSelectedLanguage() {
  return selectedLanguage;
}

/**
 * Sets the code language used.
 *
 * @author Guilherme da Silva Martin
 * @param {*} language
 */
function setLanguage(language) {
  let selectedText = $(language)
    .find('option:selected')
    .text();
  let selectedValue = $(language)
    .find('option:selected')
    .val();

  selectedLanguage = selectedText;
  changeCodeMirrorMode(selectedValue);
  $('#code-language').text(selectedText);
}

/**
 * Set toastr notification settings.
 *
 * @author Guilherme da Silva Martin
 */
function setToastrOptions() {
  toastr.options = {
    progressBar: true,
    timeOut: 0
  };
}

/**
 * Show register form.
 *
 * @author Creative Tim
 */
function showRegisterForm() {
  $('.loginBox').fadeOut('fast', () => {
    $('.registerBox').fadeIn('fast');
    $('.login-footer').fadeOut('fast', () => {
      $('.register-footer').fadeIn('fast');
    });
    $('.modal-title').html('Register with');
  });
  $('.error')
    .removeClass('alert alert-danger')
    .html('');
}

/**
 * Show login form.
 *
 * @author Creative Tim
 */
function showLoginForm() {
  $('#loginModal .registerBox').fadeOut('fast', () => {
    $('.loginBox').fadeIn('fast');
    $('.register-footer').fadeOut('fast', () => {
      $('.login-footer').fadeIn('fast');
    });

    $('.modal-title').html('Login with');
  });
  $('.error')
    .removeClass('alert alert-danger')
    .html('');
}

/**
 * Show login modal.
 *
 * @author Creative Tim
 */
function openLoginModal() {
  showLoginForm();
  setTimeout(() => {
    $('#loginModal').modal('show');
  }, 230);
}

/**
 * Show register modal.
 *
 * @author Creative Tim
 */
function openRegisterModal() {
  showRegisterForm();
  setTimeout(() => {
    $('#loginModal').modal('show');
  }, 230);
}

/**
 * Login user.
 *
 * @author Guilherme da Silva Martin
 */
function login() {
  /*   Remove this comments when moving to server
  $.post( "/login", function( data ) {
          if(data == 1){
              window.location.replace("/home");            
          } else {
               shakeModal(); 
          }
      });
  */

  /*   Simulate error message from the server   */
  shakeModal();
}

/**
 * Shake modal effect
 *
 * @author Creative Tim
 */
function shakeModal() {
  $('#loginModal .modal-dialog').addClass('shake');
  $('.error')
    .addClass('alert alert-danger')
    .html('Invalid email/password combination');
  $('input[type="password"]').val('');
  setTimeout(() => {
    $('#loginModal .modal-dialog').removeClass('shake');
  }, 1000);
}

/**
 * Open the options modal.
 *
 * @author Guilherme da Silva Martin
 */
function openOptionsModal() {
  $('#optionsModal').modal('show');
}

/**
 * Runs as soon as the page is ready.
 *
 * @author Guilherme da Silva Martin
 */
$(document).ready(() => {
  setToastrOptions();
});
