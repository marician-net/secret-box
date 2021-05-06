<template>
  <section class="main">
    <img class="bg-news" src="/img/bg-news.png" alt="launcing" />
    <div class="container_news">
      <h1 class="title">News & Updates</h1>
      <div class="highlights-list">
        <div class="list-card">
          <h6 class="sub-title">
            <svg
              width="24"
              height="33"
              viewBox="0 0 24 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3652 13.51C19.2118 13.2687 18.9485 13.1252 18.6668 13.1252H12.8334V3.84411C12.8334 3.44586 12.5584 3.10162 12.1734 3.01893C11.7818 2.93456 11.3984 3.13874 11.2384 3.50155L4.57168 18.6888C4.45668 18.9487 4.48168 19.2525 4.63501 19.4904C4.78835 19.73 5.05168 19.8751 5.33335 19.8751H11.1668V29.1563C11.1668 29.5545 11.4418 29.8988 11.8268 29.9814C11.8851 29.9933 11.9434 30 12.0001 30C12.3234 30 12.6251 29.8093 12.7618 29.4988L19.4285 14.3115C19.5419 14.05 19.5202 13.7496 19.3652 13.51Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            Highlights
          </h6>
          <div class="card" v-for="i in 3" :key="i">
            <div class="card-body">
              <div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
                  <path
                    d="M9.85334 5.67667C9.85334 6.70002 9.02375 7.52961 8.0004 7.52961C6.97705 7.52961 6.14746 6.70002 6.14746 5.67667C6.14746 4.65332 6.97705 3.82373 8.0004 3.82373C9.02375 3.82373 9.85334 4.65332 9.85334 5.67667Z"
                    stroke="#4E4B66"
                  />
                  <path
                    d="M12.2352 13.6768C12.2352 12.4288 11.789 11.2318 10.9947 10.3493C10.2005 9.46674 9.12321 8.97095 7.99994 8.97095C6.87667 8.97095 5.79941 9.46674 5.00514 10.3493C4.21087 11.2318 3.76465 12.4288 3.76465 13.6768"
                    stroke="#4E4B66"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Secret Agent
              </div>
              <br />
              <h6>Richie Rich Secret Box</h6>
              <p>Mar 3 . 8 min read</p>
            </div>
            <div class="card-image">
              <img src="/img/news-4.png" alt="News" />
            </div>
          </div>
        </div>
      </div>
      <div class="highlights-square">
        <div class="card">
          <div class="card-square">
            <img src="/img/news-2.png" alt="News" />

            <br />
            <br />
            <h5>Richie Rich Secret Box</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ut diam lorem id. Vel nisl, placerat lorem ac et a
              libero iaculis pellentesque...
            </p>
            <p>Mar 3 . 8 min read</p>
            <div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
                <path
                  d="M9.85334 5.67667C9.85334 6.70002 9.02375 7.52961 8.0004 7.52961C6.97705 7.52961 6.14746 6.70002 6.14746 5.67667C6.14746 4.65332 6.97705 3.82373 8.0004 3.82373C9.02375 3.82373 9.85334 4.65332 9.85334 5.67667Z"
                  stroke="#4E4B66"
                />
                <path
                  d="M12.2352 13.6768C12.2352 12.4288 11.789 11.2318 10.9947 10.3493C10.2005 9.46674 9.12321 8.97095 7.99994 8.97095C6.87667 8.97095 5.79941 9.46674 5.00514 10.3493C4.21087 11.2318 3.76465 12.4288 3.76465 13.6768"
                  stroke="#4E4B66"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Secret Agent
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    dropdownMenuOs: false,
  }),
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  // overflow: hidden;
  background: var(--grayscale);
  margin-top: 0;
}
.bg-news {
  position: absolute;
  width: 100%;
  left: 0;
  // overflow: hidden;
  @media (max-width: 1024px) {
    width: 200%;
    left: -50%;
  }
  @media (max-width: 600px) {
    width: 500%;
    left: -250%;
  }
}
.container_news {
  margin-top: 250px;
  width: 100%;
  padding: 0 10%;
  position: relative;
  display: flex;
  & .title {
    position: absolute;
    left: 20%;
    top: -200px;
    color: white;
    z-index: 10;
  }
  & .highlights-list {
    width: 50%;
  }
  & .highlights-square {
    width: 50%;
  }
}

.list-card {
  display: block;
  width: 100%;
  padding: 0 10%;
  & .sub-title {
    display: flex;
    padding: 30px;
  }
}
.card {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
  & .card-body {
    padding: 5%;
  }
  & .card-image {
    margin-left: auto;
  }
  & .card-square {
    width: 100%;
    padding: 32px;
    & img {
      width: 100%;
    }
  }
}
.card:hover {
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
}
</style>