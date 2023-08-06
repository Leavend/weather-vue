<template>
  <section class="hero">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6 text-center">
          <h1 class="display-4">Welcome to WeatherApp</h1>
          <p class="lead">
            Get real-time weather updates and forecasts for your location.
          </p>
          <router-link to="/weather" class="btn btn-primary btn-lg">
            Get Started
          </router-link>
        </div>
        <div class="col-md-6">
          <img src="../assets/hero.jpg" alt="Weather Illustration" class="img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroComponent",
};
</script>

<style>
/* Add your custom styles here */
.hero {
  background-color: #f7f7f7;
  padding: 80px 0;
}

.hero h1 {
  font-size: 48px;
  margin-bottom: 20px;
  color: #333;
}

.hero p {
  font-size: 18px;
  margin-bottom: 40px;
  color: #777;
}

.hero img {
  max-width: 100%;
}
</style>
