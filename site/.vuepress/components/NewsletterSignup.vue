<template>
  <div class="newsletter-signup">
    <h3 class="newsletter-signup__header">
      Sign up for our monthly newsletter!
    </h3>
    <div class="newsletter-signup__cta">
      Get updates from the Dat Foundation in your inbox each month! You can <a href="https://us16.campaign-archive.com/home/?u=993df3c1e35c9b224b64ccf72&id=0b92b85247" title="View previous campaigns" target="_blank" rel="noopener">read</a> newsletters from past months or <a href="https://github.com/datproject/newsletter" target="_blank" rel="noopener">learn</a> how you can contribute here.
    </div>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup">
      <form action="https://datproject.us16.list-manage.com/subscribe/post?u=993df3c1e35c9b224b64ccf72&amp;id=0b92b85247" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate newsletter-sign__form" target="_blank" novalidate>
        
        <input type="email" value="" name="EMAIL" class="required email newsletter-signup__email" id="mce-EMAIL">
        
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_993df3c1e35c9b224b64ccf72_0b92b85247" tabindex="-1" value=""></div>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">

        <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
        </div>    
      </form>
    </div>
    <!--End mc_embed_signup-->

  </div>
</template>

<script> 
export default {
  name: 'NewsletterSignup',
  mounted () {
    // Import the MailChimp script
    let mailchimpScript = document.createElement('script')
    mailchimpScript.setAttribute('src', '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js')
    document.head.appendChild(mailchimpScript)

    // Configure MailChimp embed
    var mailchimpConfig = document.createTextNode("(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';})");

    let mailchimpConfigScript = document.createElement('script')
    mailchimpConfigScript.appendChild(mailchimpConfig);
    document.body.appendChild(mailchimpConfigScript)

  }
}
</script> 

<style lang="scss">
@import '../assets/stylesheets/variables.scss';
.newsletter-signup {
  @include shadow;
  background: $color-white;
  border: 2px solid $color-green;
  padding: $space-medium;

  a { 
    color: $color-green;
    text-decoration: underline; 
  }
  
  &__header { margin-bottom: $space-base; }
  &__cta { margin-bottom: $space-base; }

  &__form {
    display: flex;

    input { 
      width: 100%;
      margin-right: $space-base; 
    }
  }
}

#mce-responses {
  @include type-small;
  margin: $space-small 0;
}

.mce_inline_error {
  border-color: red !important;
}
</style>
