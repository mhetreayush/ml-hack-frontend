const form = document.getElementById("form");
const price = document.getElementById("price");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const data = new FormData(form);
        console.log([...data]);
        const obj = {};
        for (let [key, value] of data) {
          obj[key] = value;
        }
        const sliderValues = {
          propertySize: document.getElementById("propertyValue").value,
          bathroomValue: document.getElementById("bathroomValue").value,
          cupboardValue: document.getElementById("cupboardValue").value,
          floorValue: document.getElementById("floorValue").value,
          totalFloorsValue: document.getElementById("totalFloorsValue").value,
          ...obj
        }
        
        console.log(sliderValues); 
        try {
          const res = await axios.post("http://127.0.0.1:5000/", sliderValues, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(res);
          price.innerHTML = res.data;
        } catch (err) {
          // console.log(err);
        }
      });