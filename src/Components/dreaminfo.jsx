const dreamInfo = {
  dokter: [
    'hmmm...untuk menjadi dokter 👩‍⚕️🥼🩺, kamu perlu menyelesaikan pendidikan kedokteran, mengikuti ujian profesi, dan mendapatkan lisensi untuk praktik. Itu semua bekal untuk agar bisa jadi dokter handal. Selalu jaga kesehatan dan komitmen kamu untuk belajar yaaaa dan berkembang dalam bidang medis. Gapai cita-cita mu setinggi langit, aku yakin kamu bisa untuk menjalani semuanya!!😁😁😁',
    'Menjadi dokter memerlukan dedikasi dan kerja keras🏥🧑‍⚕️. Kamu harus melalui pendidikan yang panjang⚗️🧪, pelatihan yang ketat, dan ujian yang sulit. Tapi hasilnya sepadan dengan usaha yang kamu keluarkan. Kamu bisa menyelamatkan nyawa dan membuat perubahan nyata dalam kehidupan orang-orang. Terus semangat dan jangan pernah menyerah! 👩‍⚕️🌟',
  ],
  polisi: [
    'ingin menjadi polisi 👮‍♂️🚔🚨Kamu bakal melalui pelatihan di akademi kepolisian, belajar banyak tentang hukum, dan berlatih dalam keterampilan kepolisian serta kepemimpinan. Tapi jangan khawatir, kesabaran dan dedikasi adalah kunci untuk berhasil di bidang ini. Kalau kamu tetap semangat dan terus berusaha, kamu pasti bisa jadi polisi yang hebat dan berdampak besar! Keep going and stay awesome! 🚔💪',
    'Menjadi polisi adalah tugas yang mulia dan penuh tantangan. Kamu harus siap menghadapi berbagai situasi sulit dan menjaga ketertiban serta keamanan. Dengan pelatihan yang baik dan semangat yang kuat, kamu bisa menjadi polisi yang berprestasi. Tetap berkomitmen dan berjuanglah untuk kebenaran!😁😁🫡'
  ],
  insinyur: [
    'menjadi insinyur bukanlah hal yang mudah tetapi kamu bisa lakukan dengan hal-hal kecil dihidup mu seperti kedisiplinan yang kuat🕛 serta keinginan dan tekad 🏃‍♂️🏃‍♀️yang kuat juga, aku yakin kamu bisa melewati semuanya dengan penuh semangat lanjut kan mimpi mu yaaa,🫵🫵🫵🫵',
    'Insinyur adalah orang yang membangun masa depan⭐. Dengan kreativitas dan kemampuan teknis⚒️🛠️📐, kamu bisa menciptakan inovasi yang mengubah dunia. Teruslah belajar dan berinovasi, dan kamu akan menjadi insinyur yang sukses dan dihormati.🫡🫡'
  ],
  guru: [
    'jadi guru itu keren banget, lho. Kayak jadi terang di tengah kegelapan, bener-bener bisa bikin perubahan buat masa depan. Bayangin deh, kamu bisa ngasih inspirasi dan ilmu buat generasi berikutnya. Serius, ini pekerjaan yang mulia banget🌞🌞. Aku yakin kamu bisa ngelakuin itu, semangat terus ya!!🧑‍🏫👩‍🏫',
    'Guru adalah pahlawan tanpa tanda jasa🎖️. Dengan dedikasi dan keahlianmu dalam mengajar📖✏️, kamu bisa menginspirasi dan membentuk masa depan generasi muda. Teruslah memberikan yang terbaik dalam setiap pelajaran dan lihatlah bagaimana murid-muridmu berkembang. kalo dah jadi guru jangan lupakan anak didikmu yang pernah kamu ajar dulu okeeyy🫡🫡😺'
  ],
  arsitek: [
    'Untuk menjadi arsitek, Anda perlu menyelesaikan pendidikan arsitektur, mendapatkan lisensi profesional, dan memiliki keterampilan dalam desain dan perencanaan bangunan.',
    'Arsitek merancang masa depan kita. Dengan visi kreatif dan pengetahuan teknis, kamu bisa menciptakan bangunan yang indah dan fungsional. Teruslah berkreasi dan berinovasi, dan kamu akan meninggalkan jejak yang abadi di dunia ini.'
  ],
  pengacara: [
    'Menjadi pengacara memerlukan gelar hukum, ujian lisensi, dan kemampuan untuk menganalisis hukum serta berargumen secara efektif. Komitmen terhadap etika dan keadilan sangat penting.',
    'Pengacara adalah pembela keadilan. Dengan pengetahuan hukum yang mendalam dan kemampuan berdebat yang tajam, kamu bisa membantu orang-orang mendapatkan keadilan yang mereka cari. Tetaplah berpegang pada prinsip-prinsip keadilan dan kebenaran.'
  ],
  pengusaha: [
    'wooouuw keren banget ada yang ingin menjadi boss muda 😎😎, aku harap kamu bisa meraih kesuksesan dengan kerja keras dan ketekunan. Jangan lupa untuk selalu belajar dari pengalaman dan tetap bersemangat!🗣️🦾',
    'Menjadi pengusaha memerlukan keberanian dan inovasi. Dengan visi yang jelas dan strategi yang tepat, kamu bisa membangun bisnis yang sukses. Teruslah berusaha dan jangan pernah takut gagal, karena setiap kegagalan adalah langkah menuju kesuksesan.'
  ],
  tentara:[
    "siap komandan untuk menjadi tentara kamu harus gigih serta kuatkan mental untuk menjaga NKRI 🫡🫡🫡yaa,tentara adalah salah satu cita cita yang paling mulia aku bangga padamu 🪖🪖"
  ],
  programmer:[
    "aduh siap siap mental kak soalnya banyak mental dan hati yang terkuras tapi tetap semnagat yaaaa😸😸😺😁"
  ]
};

const synonyms = {
  dokter: ['dokter', 'doktor','dokter kulit'],
  polisi: ['polisi'],
  insinyur: ['insinyur'],
  guru: ['guru'],
  arsitek: ['arsitek'],
  pengacara: ['pengacara'],
  pengusaha: ['pengusaha', 'bisnis']
};

const getDreamMessage = (dream) => {
  for (const [key, values] of Object.entries(synonyms)) {
    if (values.includes(dream.toLowerCase())) {
      const messages = dreamInfo[key];
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    }
  }
  return 'Tapi aku belum menambahkan cita-cita tersebut ke dalam data hehe, untuk itu apapun yang ingin kamu gapai raihlah dengan penuh semangat yaaa aku yakin kamu pasti bisa ❤️';
};

export default getDreamMessage;
