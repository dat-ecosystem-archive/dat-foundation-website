---
title: Chat
content: This is the chat page.
---
<h1 class="page-title">Chat</h1>
<p class="chat__subhead">
Here's the <a href="https://gitter.im/datproject/discussions/">Gitter</a> chat which is bridged to our <a href="https://webchat.freenode.net/?channels=dat">IRC channel</a>.
</p>
<div class="gitter-chat"></div>

<script>
export default {
  mounted () {
    // Configure Gitter embed
    var gitterConfig = document.createTextNode("((window.gitter = {}).chat = {}).options = { room: 'datproject/discussions', targetElement: '.gitter-chat', showChatByDefault: true }");

    let gitterConfigScript = document.createElement('script')
    gitterConfigScript.appendChild(gitterConfig);
    document.head.appendChild(gitterConfigScript)

    // Import the Gitter script
    let gitterScript = document.createElement('script')
    gitterScript.setAttribute('src', 'https://sidecar.gitter.im/dist/sidecar.v1.js')
    document.head.appendChild(gitterScript)
  }
}
</script>

<style lang="scss">
@import '../../.vuepress/assets/stylesheets/variables.scss';

.gitter-chat {
  @include shadow;
  border: 1px solid $color-gray-light;

  iframe {
    width: 100%;
    height: 80vh;
  }
}

.chat__subhead {
  @include text-subhead;
  margin-bottom: $space-medium;
}

.gitter-chat-embed-action-bar {
  display: none;
}
</style>
