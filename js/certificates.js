export function loadCertificates() {
  fetch("./data/certificates.json")
    .then((response) => response.json())
    .then((certificates) => {
      const container = document.getElementById("certificates");
      let normalView = "";
      let printView = '<ul class="aside-print">';

      certificates.forEach((cert) => {
        normalView += `
            <div class="aside-noprint">
              <a href="${cert.link}">
                <i class="fas fa-file-pdf"></i> ${cert.title}
              </a>
              <p class="cert-source">${cert.source}</p>
            </div>
          `;
        printView += `
            <li>${cert.title}</li>
            <p class="cert-source">${cert.source}</p>
          `;
      });

      printView += "</ul>";
      container.innerHTML = normalView + printView;
    })
    .catch((error) => console.error("Error loading certificates:", error));
}
