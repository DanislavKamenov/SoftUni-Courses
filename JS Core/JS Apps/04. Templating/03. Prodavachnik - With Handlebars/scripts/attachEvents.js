let eventBinder = (function () {
    $(document).on({
        ajaxStart: () => $('#loadingBox').show(),
        ajaxStop: () => $('#loadingBox').hide()
    });

    function links() {
        $('#linkHome').on('click', loadHomeTemplate);
        $('#linkLogin').on('click', loadFormTemplate);
        $('#linkRegister').on('click', loadFormTemplate);
        $('#linkLogout').on('click', auth.logOutUser);
        $('#linkCreateAd').on('click', loadFormTemplate);
        $('#linkListAds').on('click', listAds);

        $("#infoBox, #errorBox").on('click', function() {
            $(this).fadeOut()
        });
    }

   function formAuth() {
       $('#buttonRegisterUser').on('click', auth.registerUser);
       $('#buttonLoginUser').on('click', auth.loginUser);
   }

   function formSend() {
       $('#buttonCreateAd').on('click', createAd);
       $('#buttonEditAd').on('click', editAd);
   }

   function create() {
       $('#buttonCreateAd').on('click', createAd);
   }

   function edit() {
       $('#buttonEditAd').on('click', editAd);
   }

   function actions() {
       $('.readMore').on('click', incrementViews);
       $('.edit').on('click', loadEditTemplate);
       $('.delete').on('click', deleteAd);
   }

   return {links, formAuth, formSend, create, edit, actions};
})();