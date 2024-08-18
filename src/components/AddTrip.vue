<script>
export default {
  name: "AddTrip",
  data() {
    return {};
  },
};
</script>

<template>
  <main class="container">
    <h2>Here you can add a trip you've already done</h2>
    <div class="row">
      <div class="col">
        <div class="container">
          <form>
            <div class="mb-3 row">
              <label for="inputName" class="col-4 col-form-label">Name</label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  name="inputName"
                  id="inputName"
                  placeholder="Name"
                />
              </div>
            </div>
            <fieldset class="mb-3 row">
              <legend class="col-form-legend col-4">Group name</legend>
              <div class="col-8">you can use radio and checkboxes here</div>
            </fieldset>
            <div class="mb-3 row">
              <div class="offset-sm-4 col-sm-8">
                <button type="submit" class="btn btn-primary">Action</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
