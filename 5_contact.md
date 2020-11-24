---
title: Contact
permalink: /contact
order: 5
---

<div class=wrapper>
Use this form to send us a message:

<form action="https://getform.io/f/e1a66ce8-72de-4e37-8ad6-536ee8fdccfc" method="POST">

    <input type="text" name="name" placeholder="Name">
    <input type="email" name="email" placeholder="E-Mail">
    <input type="tel" name="tel" placeholder="Phone">
    <div id="counter">0 / 1024</div>
    <textarea name="message" placeholder="Brief Message" maxlength=1024 onInput="updateCount(this)"></textarea>
    <button type="submit">Send</button>
    <script type="text/javascript">
      function updateCount(e) {
        document.getElementById("counter").innerHTML = `${e.value.length} / ${e.maxLength}`;
      }
    </script>

</form>
</div>
