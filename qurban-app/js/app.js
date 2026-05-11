let editId = null;

function tambahPeserta() {

  const nama =
    document.getElementById("nama").value;

  const nohp =
    document.getElementById("nohp").value;

  const alamat =
    document.getElementById("alamat").value;

  const jenis =
    document.getElementById("jenis").value;

  const patungan =
    document.getElementById("patungan").value;

  const data = {

    nama: nama,

    no_hp: nohp,

    alamat: alamat,

    jenis_qurban: jenis,

    jumlah_patungan: Number(patungan)

  };

  // MODE TAMBAH
  if (editId === null) {

    db.ref("peserta_qurban")
      .push(data);

  }

  // MODE EDIT
  else {

    db.ref("peserta_qurban/" + editId)
      .update(data);

    editId = null;

  }

  // RESET FORM
  document.getElementById("nama").value = "";

  document.getElementById("nohp").value = "";

  document.getElementById("alamat").value = "";

  document.getElementById("jenis").value = "Sapi";

  document.getElementById("patungan").value = "";

}

db.ref("peserta_qurban").on("value", function(snapshot) {

  const dataPeserta =
    document.getElementById("dataPeserta");

  dataPeserta.innerHTML = "";

  let totalPeserta = 0;

  let totalUang = 0;

  snapshot.forEach(function(childSnapshot) {

    const id = childSnapshot.key;

    const data = childSnapshot.val();

    totalPeserta++;

    totalUang += data.jumlah_patungan;

    dataPeserta.innerHTML += `

      <div class="card">

        <h3>${data.nama}</h3>

        <p>📞 ${data.no_hp}</p>

        <p>🏠 ${data.alamat}</p>

        <p>🐄 ${data.jenis_qurban}</p>

        <p>
          💰 Rp
          ${Number(data.jumlah_patungan)
.toLocaleString("id-ID")}
        </p>

        <button type="button"
        onclick="editPeserta('${id}')">

          Edit

        </button>

        <button type="button"
        onclick="hapusPeserta('${id}')">

          Hapus

        </button>

      </div>

    `;

  });

  document.getElementById("totalPeserta")
    .innerHTML = totalPeserta;

  document.getElementById("totalUang")
    .innerHTML =
      "Rp " +
      totalUang.toLocaleString("id-ID");

});

function hapusPeserta(id) {

  db.ref("peserta_qurban/" + id)
    .remove();

}


function editPeserta(id) {

  editId = id;

  db.ref("peserta_qurban/" + id)
    .once("value")

    .then((snapshot) => {

      const data = snapshot.val();

      totalPeserta++;

totalUang += Number(data.jumlah_patungan);

      document.getElementById("nama").value =
        data.nama;

      document.getElementById("nohp").value =
        data.no_hp;

      document.getElementById("alamat").value =
        data.alamat;

      document.getElementById("jenis").value =
        data.jenis_qurban;

      document.getElementById("patungan").value =
        data.jumlah_patungan;

    });

}