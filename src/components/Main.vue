<script>
export default {
  name: "Main",
  data() {
    return {};
  },
};
</script>

<template>
  <main class="container">
    <div>
      <div class="mb-3">
        <label for="" class="form-label">Trip or vacation</label>
        <input
          type="text"
          class="form-control"
          name=""
          id=""
          aria-describedby="helpId"
          placeholder="New York"
        />
        <small id="helpId" class="form-text text-muted"
          >Type here the trip you want to find</small
        >
      </div>
    </div>

    <div class="table-responsive rounded">
      <table class="table table-primary">
        <thead>
          <tr>
            <th scope="col">Where have you been?</th>
            <th scope="col">When?</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td scope="row">London</td>
            <td>19/10/98</td>
            <td>Open</td>
          </tr>
          <tr class="">
            <td scope="row">London</td>
            <td>19/10/98</td>
            <td>Open</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style></style>
