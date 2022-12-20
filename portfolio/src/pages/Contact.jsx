import React from "react";

export const Contact = () => {
    return (
        <section>
<>
<div class="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        {/* <!-- <h1 class="modal-title fs-5" >Contact Me</h1> --> */}
        <h1 class="fw-bold mb-0 fs-2">Contact Me</h1>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="name" class="form-control rounded-3" id="floatingInput" placeholder="name"/>
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingEmail" placeholder="email"/>
            <label for="floatingEmail">Email</label>
          </div>
          <div class="form-floating mb-5">
            <textarea type="text" class="form-control rounded-3" id="floatingText" rows="3" placeholder="message"></textarea>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-dark" type="submit" >Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
</>
        </section>
    )
}