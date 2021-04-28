<template>
  <section class="main">
    <img class="bg-launching" src="/img/bg-launching.png" alt="launcing" />
    <div class="container">
      <h2 class="title">
        Launching Your Developer
        <br />
        Secret Network
      </h2>
      <div class="content">
        <p>
          This tutorial is for developers to get started with development on the
          Secret Network. The local blockchain runs in a docker container and
          simulates the Intel SGX (TEE) that is a requirement for the Holodeck
          testnet and mainnet.
        </p>
        <br />
        <p>
          It's super easy and quick, once you have
          <strong>docker</strong> installed. Just a few commands!
        </p>
        <br />
        <h4>Setup Your Environment</h4>
        <br />
        <ul>
          <li>Install Docker for your environment (Mac, Windows, Linux).</li>
        </ul>
        <br />
        <h4>
          Launch the Developer Secret Network
          <button class="btn btn-primary btn-lg">Linux</button>
        </h4>
        <br />
        <p>
          In a terminal window start the Secret Network by running the docker
          container named secretdev:
        </p>
        <br>
        <div>
        <prism-editor
            class="my-editor height-100"
            v-model="code"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
        </prism-editor>
         <button class="btn btn-outline-default">Copy</button>

        </div>
        <br>
        <button class="btn btn-primary btn-lg">
          Note: To stop the secretdev blockchain enter 
        </button>
        <br>
        <p>Your local blockchain starts with a set of keys or accounts, named  </p>
        <br>
         <div>
          <prism-editor
              class="my-editor height-300"
              v-model="code2"
              :highlight="highlighter"
              :line-numbers="lineNumbers"
              :readonly="true"
            >
          </prism-editor>
           <button class="btn btn-outline-default">Copy</button>
         </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    code: `
docker run -it --rm \

  -p 26657:26657 -p 26656:26656 -p 1337:1337 \

  --name secretdev enigmampc/secret-network-sw-dev`,
  code2: `
[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]`,
    lineNumbers: true,
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
  },
};
</script>
<style lang="scss" scope>
.main {
  width: 100vw;
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
}
.bg-launching {
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 200%;
    left: -50%;
  }
  @media (max-width: 404px) {
    width: 500%;
    left: -250%;
  }
}
.container {
  width: 100%;
  padding: 0 20%;
  position: relative;
  & .title {
    position: absolute;
    left: 20%;
    top: 50px;
    color: white;
    z-index: 10;
  }
  & .content {
    margin-top: 35%;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
}

// required class
.my-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

// optional
.prism-editor__textarea:focus {
  outline: none;
}

// not required:
.height-300 {
  height: 300px;
}
.height-100 {
  height: 100px;
}
</style>