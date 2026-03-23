const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modImg");

fetch("https://trackbit.nielitkohima.in/fetch_images.php")
.then(r=>r.json())
.then(({data})=>{

  data.sort((a,b)=>new Date(a.uploaded_at)-new Date(b.uploaded_at));

  data.forEach(i=>{

    const col=document.createElement("div");
    col.className="col-6 col-md-4 col-lg-3 mb-3";

    const card=document.createElement("div");
    card.className="card";

    const img=document.createElement("img");
    img.src=i.file_path;

    const overlay=document.createElement("div");
    overlay.className="overlay";
    overlay.innerHTML=`
      <strong>${i.title}</strong>
      <small>${new Date(i.uploaded_at).toLocaleDateString()}</small>
    `;

    img.onclick=()=>{
      modImg.src=i.file_path;
      modal.classList.add("active");
    };

    card.append(img,overlay);
    col.appendChild(card);
    gallery.appendChild(col);
  });

});

modal.onclick=()=>modal.classList.remove("active");
