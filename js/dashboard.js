const nama =
localStorage.getItem("namaUser");

document.getElementById("welcome")
.innerText = nama;

document.getElementById("welcome2")
.innerText = nama;

db.ref("peserta_qurban")
.on("value", function(snapshot){

  let totalPeserta = 0;
  let totalUang = 0;
  let nomor = 1;

  const table =
  document.getElementById(
    "tablePeserta"
  );

  table.innerHTML = "";

  snapshot.forEach(function(child){

    const id = child.key;
    const data = child.val();

    totalPeserta++;

    totalUang +=
    Number(data.jumlah_patungan);

    table.innerHTML += `
      <tr>

        <td>${nomor++}</td>

        <td>${data.nama}</td>

        <td>${data.jenis_qurban}</td>

        <td>
          Rp ${Number(
            data.jumlah_patungan
          ).toLocaleString("id-ID")}
        </td>

        <td>

          <button
          onclick="hapusPeserta('${id}')">

          Hapus

          </button>

        </td>

      </tr>
    `;

  });

  document.getElementById(
    "totalPeserta"
  ).innerText = totalPeserta;

  document.getElementById(
    "totalUang"
  ).innerText =
  "Rp " +
  totalUang.toLocaleString("id-ID");

});

function hapusPeserta(id){

  db.ref(
    "peserta_qurban/" + id
  ).remove();

}
