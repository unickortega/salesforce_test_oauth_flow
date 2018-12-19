<template lang="html">
  <div class="container-fluid">
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 bd-highlight">
        <h4>Manage Project</h4>
      </div>
      <div class="p-2 bd-highlight">
        <select class="form-control form-control-sm">
          <option>Select Term</option>
        </select>
      </div>
      <div class="p-2 bd-highlight">
        <div class="input-group input-group-sm mb-3">
          <input type="text" class="form-control" placeholder="input search word" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" id="btn2">Search</button>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="table-responsive">
        <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">Term</th>
            <th scope="col">Project Name</th>
            <th scope="col">Client Name</th>
            <th scope="col">Bill</th>
            <th scope="col">Bill Document</th>
            <th scope="col">Order Document</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="width: 20%">2018/10/1-2019/10/2</td>
            <td style="width: 20%">Dummy Project A</td>
            <td style="width: 25%">Pikopoko</td>
            <td style="width: 10%">$150,000</td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal1 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal1" title="Bill Document">
                <p class="my-4">Bill Document goes here!</p>
              </b-modal>
            </td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal2 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal2" title="Order Document">
                <p class="my-4">Order Document goes here!</p>
              </b-modal>
            </td>
          </tr>
          <tr>
            <td style="width: 20%">2018/10/1-2019/10/2</td>
            <td style="width: 20%">Dummy Project B</td>
            <td style="width: 25%">Pikopoko</td>
            <td style="width: 10%">$224,453</td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal1 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal3" title="Bill Document">
                <p class="my-4">Bill Document goes here!</p>
              </b-modal>
            </td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal2 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal4" title="Order Document">
                <p class="my-4">Order Document goes here!</p>
              </b-modal>
            </td>
          </tr>
          <tr>
            <td style="width: 20%">2018/10/1-2019/10/2</td>
            <td style="width: 20%">Dummy Project C</td>
            <td style="width: 25%">Pikopoko</td>
            <td style="width: 10%">$203,444</td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal1 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal5" title="Bill Document">
                <p class="my-4">Bill Document goes here!</p>
              </b-modal>
            </td>
            <td style="width: 12.5%">
              <b-btn v-b-modal.modal2 class="btn btn-sm">Preview</b-btn>
              <b-modal id="modal6" title="Order Document">
                <p class="my-4">Order Document goes here!</p>
              </b-modal>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
