const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modImg = document.getElementById("modImg");

// Direct path to your JSON file
const JSON_FILE = "data.json"; 

fetch(JSON_FILE)
  .then(r => {
    if (!r.ok) throw new Error("Could not find the JSON file");
    return r.json();
  })
  .then(({ data }) => {
    // Sort: Newest items at the top
    data.sort((a, b) => new Date(b.uploaded_at) - new Date(a.uploaded_at));

    // Clear gallery before rendering
    gallery.innerHTML = "";

    data.forEach(i => {
      const col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3 mb-3";

      const card = document.createElement("div");
      card.className = "card shadow-sm border-0";
      card.style.position = "relative";
      card.style.overflow = "hidden";
      card.style.borderRadius = "8px";

      const img = document.createElement("img");
      img.src = i.file_path;
      img.alt = i.title;
      img.style.width = "100%";
      img.style.height = "200px";
      img.style.objectFit = "cover";
      img.style.cursor = "pointer";
      img.style.display = "block";

      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 10px;
        font-size: 12px;
        pointer-events: none;
      `;
      overlay.innerHTML = `
        <div style="font-weight: bold;">${i.title}</div>
        <div style="font-size: 10px; opacity: 0.8;">${new Date(i.uploaded_at).toLocaleDateString()}</div>
      `;

      img.onclick = () => {
        modImg.src = i.file_path;
        modal.classList.add("active");
        modal.style.display = "flex"; // Ensure visibility
      };

      card.append(img, overlay);
      col.appendChild(card);
      gallery.appendChild(col);
    });
  })
  .catch(err => {
    console.error("Error:", err);
    gallery.innerHTML = `<div class="col-12 text-center text-danger">Error loading data.json</div>`;
  });

// Close Modal
modal.onclick = () => {
  modal.classList.remove("active");
  modal.style.display = "none";
};
