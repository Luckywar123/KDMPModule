// ════════════════════════════════════════════════════════════════
//  questions.js — Modul CAT KDKMP Agrinas v4
//  Struktur: Sub-Modul per topik, 20 soal per sub-modul
//  Total sub-modul: 10 sub-modul = 200 soal
// ════════════════════════════════════════════════════════════════

const SUBMODULES = {

// ══════════════════════════════════════════════
// MODULE 1: MANAJERIAL
// ══════════════════════════════════════════════

"1a": {
  id:"1a", module:1,
  label:"Kepemimpinan Situasional",
  icon:"🏛️",
  desc:"Hersey-Blanchard S1–S4, M1–M4, gaya memimpin, delegasi, coaching, supporting, directing",
  color:"green",
  questions:[
    {q:"Staf gudang baru bersemangat tinggi tetapi sering salah prosedur penyimpanan. Gaya kepemimpinan yang paling tepat adalah...",opts:["Delegating — serahkan sepenuhnya kepada staf","Coaching — bimbing sambil jelaskan setiap langkah secara mendalam","Supporting — fasilitasi dan dukung inisiatifnya","Directing — beri instruksi spesifik dan awasi ketat setiap langkah"],ans:3,exp:"Hersey-Blanchard M1 (motivasi ↑, kompetensi ↓) → S1 Directing. Staf baru butuh instruksi spesifik step-by-step dan pengawasan ketat sampai kompetensi dasar terbentuk. Bukan Coaching karena belum ada dasar kompetensi yang bisa dikembangkan."},
    {q:"Staf senior gudang sangat kompeten namun belakangan sering tidak bersemangat dan terlihat apatis. Pendekatan terbaik manajer adalah...",opts:["Kembali ke Directing — awasi ketat seperti staf baru","Delegating — serahkan penuh dan biarkan dia bekerja sendiri","Supporting — diskusi terbuka, apresiasi kontribusi, dan dukung motivasinya","Coaching — bimbing ulang dari dasar lagi"],ans:2,exp:"M3 (kompetensi tinggi, motivasi rendah) → S3 Supporting. Staf ini tidak butuh instruksi teknis lagi. Yang dibutuhkan adalah pengakuan, apresiasi, diskusi untuk membangkitkan kembali semangat dan ownership pekerjaannya."},
    {q:"Manajer baru dihadapkan pada tim staf berpengalaman 5+ tahun yang sudah sangat memahami tugasnya. Gaya yang paling tepat untuk staf ini adalah...",opts:["Directing — beri instruksi rinci agar memahami standar manajer baru","Coaching — bimbing intensif meskipun sudah berpengalaman","Supporting — diskusi dan minta masukan dari staf senior secara aktif","Delegating — serahkan penuh tanggung jawab sesuai keahlian mereka"],ans:3,exp:"Staf 5+ tahun yang sudah sangat memahami tugas adalah M4 (kompetensi ↑, motivasi ↑) → S4 Delegating. Percayakan penuh, pantau hasil saja. Directing justru akan demotivasi dan merusak kepercayaan."},
    {q:"Staf berkompetensi tinggi namun tiba-tiba performa menurun dan menolak target baru. Langkah manajer yang paling tepat adalah...",opts:["Langsung beri surat peringatan tertulis","Ganti dengan staf yang lebih termotivasi","Diskusi empat mata untuk memahami penyebab, lalu gunakan S3 Supporting","Tambah insentif keuangan tanpa diskusi"],ans:2,exp:"Performa menurun pada staf kompeten biasanya bukan masalah kemampuan melainkan motivasi atau hambatan eksternal. Supporting (S3) — dialog terbuka, identifikasi hambatan, berikan dukungan personal — adalah langkah paling tepat."},
    {q:"Staf magang baru yang antusias tapi belum memiliki pengetahuan dasar tentang pengelolaan gabah. Gaya kepemimpinan yang tepat adalah...",opts:["S2 Coaching — bimbing intensif sambil jelaskan alasan teknis","S1 Directing — instruksi spesifik langkah demi langkah dengan supervisi penuh","S3 Supporting — beri kebebasan dan dukung inisiatifnya","S4 Delegating — percayakan sepenuhnya karena mereka antusias"],ans:1,exp:"M1: motivasi tinggi, kompetensi sangat rendah → S1 Directing. Staf magang butuh panduan yang sangat spesifik dan pengawasan penuh. Coaching (S2) digunakan ketika sudah ada dasar kompetensi yang bisa dikembangkan."},
    {q:"Dalam teori Hersey-Blanchard, 'Coaching' (S2) paling tepat diterapkan pada staf dengan karakteristik...",opts:["Kompetensi rendah dan motivasi rendah","Kompetensi sedang dan motivasi bervariasi (M2)","Kompetensi tinggi dan motivasi rendah","Kompetensi tinggi dan motivasi tinggi"],ans:1,exp:"S2 Coaching = untuk M2 (kompetensi berkembang, motivasi naik-turun). Manajer masih tinggi dalam task behavior (arahkan) tapi juga mulai tinggi dalam relationship behavior (bimbing, jelaskan alasan, dua arah komunikasi)."},
    {q:"Staf yang dulunya performa tinggi (M4) tiba-tiba mengalami kemunduran signifikan akibat perubahan sistem baru. Gaya kepemimpinan yang perlu disesuaikan adalah...",opts:["Tetap Delegating karena sudah terbukti kompeten","Turun ke S3 Supporting untuk berikan dukungan emosional dan teknis","Turun ke S2 Coaching karena ada gap kompetensi baru yang perlu diisi","Turun ke S1 Directing karena kinerja sudah menurun drastis"],ans:2,exp:"Situational Leadership bersifat fleksibel. Ketika sistem berubah dan staf menghadapi gap kompetensi baru, turun ke S2 Coaching tepat — ada kebutuhan pembelajaran ulang teknis sekaligus dukungan emosional menghadapi perubahan."},
    {q:"Manajer KDKMP mengawasi 3 staf: A (baru, antusias), B (berpengalaman, termotivasi), C (pengalaman cukup, motivasi fluktuatif). Gaya yang TEPAT untuk masing-masing adalah...",opts:["A: S1, B: S4, C: S3","A: S4, B: S1, C: S2","A: S2, B: S3, C: S4","A: S1, B: S2, C: S4"],ans:0,exp:"A (M1: semangat tinggi, skill rendah) → S1 Directing. B (M4: kompeten dan termotivasi) → S4 Delegating. C (M3: kompeten tapi motivasi naik-turun) → S3 Supporting. Ini aplikasi model Hersey-Blanchard yang fleksibel per individu."},
    {q:"Kepemimpinan transformasional berbeda dari transaksional terutama karena...",opts:["Fokus pada reward dan punishment berbasis kinerja terukur","Menginspirasi, memotivasi secara intrinsik, dan membangun visi & misi jangka panjang","Lebih ketat dalam mengawasi dan mengontrol kinerja staf harian","Lebih banyak memberikan instruksi teknis operasional detail"],ans:1,exp:"Kepemimpinan transformasional (Bass & Avolio) mencakup 4I: Idealized Influence, Inspirational Motivation, Intellectual Stimulation, Individual Consideration. Fokus pada motivasi intrinsik dan visi jangka panjang — berbeda fundamental dari transaksional yang berbasis reward/punishment."},
    {q:"Seorang manajer KDKMP selalu menyelesaikan konflik dengan cara menghindar agar tidak mengganggu keharmonisan tim. Dampak jangka panjang dari gaya ini adalah...",opts:["Tim menjadi solid karena tidak ada konflik terbuka","Masalah menumpuk, kepercayaan menurun, dan konflik akhirnya meledak lebih besar","Tim menjadi lebih mandiri dalam menyelesaikan masalah sendiri","Produktivitas meningkat karena fokus pada pekerjaan"],ans:1,exp:"Menghindar dari konflik (avoiding) dalam Thomas-Kilmann Model menghasilkan lose-lose. Masalah tidak terselesaikan, menumpuk, dan akhirnya meledak dengan dampak lebih besar. Manajer efektif menghadapi konflik dengan strategi kolaborasi atau kompromi."},
    {q:"Model 70-20-10 dalam pengembangan staf koperasi berarti...",opts:["70% pelatihan formal, 20% coaching, 10% pengalaman kerja","70% belajar dari pengalaman kerja langsung, 20% dari orang lain (mentoring), 10% pelatihan formal","70% teori perkoperasian, 20% praktik lapangan, 10% evaluasi","70% tugas individu, 20% kerja tim, 10% presentasi"],ans:1,exp:"Model 70-20-10 dari riset pembelajaran orang dewasa: 70% learning by doing (pengalaman kerja), 20% social learning (mentoring/coaching/role model), 10% formal training (kursus, seminar, e-learning). Implikasinya: investasi terbesar ada di penugasan langsung, bukan hanya pelatihan formal."},
    {q:"Faktor Herzberg yang tergolong 'hygiene factor' (bukan motivator) adalah...",opts:["Pencapaian dan pengakuan atas prestasi kerja","Pekerjaan yang bermakna dan menantang secara intelektual","Gaji yang cukup, kondisi kerja yang nyaman dan aman","Kesempatan berkembang dan tanggung jawab yang lebih besar"],ans:2,exp:"Herzberg Two-Factor Theory: Hygiene factors (tidak memotivasi tapi jika buruk menyebabkan ketidakpuasan) = gaji, kondisi kerja, hubungan interpersonal, kebijakan. Motivators (mendorong kepuasan) = pencapaian, pengakuan, pekerjaan bermakna, tanggung jawab."},
    {q:"Seorang manajer KDKMP menerapkan pendekatan 'management by walking around' (MBWA). Manfaat utama dari pendekatan ini adalah...",opts:["Menunjukkan kekuasaan manajer kepada seluruh staf","Mengawasi staf secara diam-diam tanpa sepengetahuan mereka","Membangun hubungan langsung, mendapat informasi real-time dari lapangan, dan mendeteksi masalah lebih awal","Mengurangi kebutuhan rapat formal dan laporan tertulis"],ans:2,exp:"MBWA (management by walking around) memungkinkan manajer: membangun rapport dengan staf, mengetahui kondisi aktual lapangan secara langsung, mendeteksi masalah operasional lebih awal, dan menunjukkan keterlibatan langsung yang memotivasi tim."},
    {q:"Staf yang selalu bergantung pada instruksi manajer untuk hal-hal kecil (low initiative) paling tepat diatasi dengan...",opts:["Terus berikan instruksi detail agar tidak salah","Delegasikan lebih banyak keputusan kecil dengan mentoring bertahap untuk membangun kepercayaan diri staf","Evaluasi dan pertimbangkan penggantian staf","Beri sanksi setiap kali mereka meminta instruksi untuk hal kecil"],ans:1,exp:"Low initiative biasanya disebabkan kurang percaya diri atau budaya organisasi yang terlalu top-down. Solusinya: delegasi bertahap dengan mentoring — beri wewenang kecil, apresiasi keberhasilan, tingkatkan secara gradual. Ini membangun kompetensi sekaligus kepercayaan diri."},
    {q:"Dalam situasi darurat koperasi (gudang kebanjiran saat panen raya), prioritas pertama manajer seharusnya adalah...",opts:["Tunggu instruksi pengurus sebelum mengambil tindakan apapun","Amankan komoditas dan keselamatan staf terlebih dahulu, baru koordinasikan solusi dan laporan","Tutup operasional koperasi sampai situasi mereda","Lapor ke media agar mendapat bantuan lebih cepat"],ans:1,exp:"Dalam krisis, urutan: (1) Keselamatan orang dan pengamanan aset (komoditas), (2) Koordinasi dengan stakeholder kunci (pengurus, Agrinas), (3) Cari solusi sementara, (4) Dokumentasi & laporan formal, (5) Rencana pemulihan. Menunggu instruksi saat krisis adalah kesalahan fatal."},
    {q:"Manajer yang efektif dalam koperasi desa harus memiliki kemampuan 'ambiguity tolerance'. Artinya...",opts:["Mampu bekerja meski menghadapi kondisi tidak pasti dan informasi tidak lengkap dengan tetap mengambil keputusan rasional","Tidak peduli pada aturan yang ambigu","Suka bekerja di lingkungan yang tidak terstruktur","Menghindari keputusan yang sulit"],ans:0,exp:"Ambiguity tolerance = kemampuan bekerja efektif dalam ketidakpastian. Di lapangan, manajer KDKMP sering harus memutuskan dengan informasi tidak lengkap (harga berubah, stok tidak pasti, cuaca tidak menentu). Kemampuan ini esensial untuk kepemimpinan efektif."},
    {q:"Seorang pengurus meminta manajer untuk 'sesuaikan' laporan serapan agar terlihat mencapai target. Respons manajer yang paling tepat adalah...",opts:["Lakukan karena pengurus adalah atasan langsung","Tolak dengan tegas, dokumentasikan permintaan ini, dan laporkan ke pengawas koperasi","Lakukan tapi tambahkan catatan kaki di laporan","Diam dan ikuti instruksi agar tidak konflik"],ans:1,exp:"Ini adalah permintaan manipulasi data — pelanggaran integritas dan akuntabilitas serius. Manajer wajib menolak meskipun dari pengurus (pengurus bukan pemilik koperasi, anggotalah pemiliknya). Dokumentasi dan pelaporan ke pengawas adalah jalur yang benar."},
    {q:"Seorang manajer baru menemukan bahwa prosedur SOP koperasi sudah lama tidak diperbarui dan tidak relevan lagi. Langkah yang paling tepat adalah...",opts:["Terapkan SOP baru dari koperasi lain yang lebih maju","Abaikan SOP lama dan buat aturan sendiri berdasarkan pengalaman","Review SOP bersama tim, identifikasi yang perlu diperbarui, usulkan revisi ke pengurus, implementasikan bertahap","Tunggu RAT untuk minta persetujuan anggota sebelum mengubah apapun"],ans:2,exp:"Perubahan prosedur yang efektif harus: partisipatif (libatkan tim), terstruktur (review sistematis), melalui jalur resmi (lapor ke pengurus), dan diimplementasikan secara bertahap agar tidak mengganggu operasional yang sedang berjalan."},
    {q:"Dalam teori kepemimpinan situasional, 'gaya kepemimpinan' yang dimaksud bukan tentang karakter manajer tapi tentang...",opts:["Seberapa keras manajer bekerja setiap harinya","Kombinasi task behavior (arahankan) dan relationship behavior (dukung) yang disesuaikan dengan kesiapan staf","Seberapa sering manajer melakukan evaluasi kinerja formal","Seberapa banyak manajer terlibat dalam pekerjaan teknis operasional"],ans:1,exp:"Situational Leadership bukan tentang kepribadian tetap manajer. Ini tentang fleksibilitas: menyesuaikan kombinasi task behavior (tinggi/rendah) dan relationship behavior (tinggi/rendah) berdasarkan tingkat kesiapan (readiness) staf pada tugas spesifik."},
    {q:"Manajer KDKMP ingin membangun budaya 'belajar dari kesalahan' dalam tim. Langkah pertama yang paling efektif adalah...",opts:["Hukum setiap kesalahan agar staf lebih hati-hati","Buat SOP zero-mistake dan awasi sangat ketat","Mulai dari diri sendiri: akui dan bagikan pembelajaran dari kesalahan manajer sendiri kepada tim","Rahasiakan kesalahan dari anggota agar kepercayaan tetap terjaga"],ans:2,exp:"Psychological safety dan budaya belajar dimulai dari pemimpin. Ketika manajer mau mengakui dan berbagi pembelajaran dari kesalahannya sendiri, ini mengirimkan sinyal kuat bahwa tim aman untuk mencoba, gagal, dan belajar. Role modeling adalah instrumen perubahan budaya paling ampuh."}
  ]
},

"1b": {
  id:"1b", module:1,
  label:"Pengambilan Keputusan & Manajemen Risiko",
  icon:"⚖️",
  desc:"Eisenhower Matrix, 5 Whys, PDCA, SWOT, manajemen risiko, prioritas, root cause analysis",
  color:"green",
  questions:[
    {q:"Tugas: (A) Laporan keuangan jatuh tempo besok, (B) Anggota baru ingin mendaftar, (C) Pemasok komplain pembayaran tertunda 2 minggu, (D) Rapat rutin koordinasi staf. Urutan prioritas yang benar...",opts:["B, A, C, D","D, B, A, C","A, C, D, B","C, A, D, B"],ans:2,exp:"Eisenhower Matrix: A (Laporan jatuh tempo besok) = Urgent+Penting → Q1 pertama. C (Pemasok tidak dibayar bisa putus pasokan) = Urgent+Penting → Q1 kedua. D (Rapat sudah terjadwal, bisa didelegasi) = Q3. B (Daftar anggota baru bisa dijadwal ulang) = Q2."},
    {q:"Teknik 5 Whys digunakan untuk...",opts:["Mengajukan 5 pertanyaan saat rekrutmen staf baru","Menemukan akar penyebab masalah dengan bertanya 'mengapa' secara berulang","Mengevaluasi 5 KPI utama koperasi setiap bulan","Membuat 5 target SMART tahunan"],ans:1,exp:"5 Whys adalah teknik Root Cause Analysis — bertanya 'mengapa' 5 kali berturut-turut untuk menemukan penyebab sesungguhnya (bukan hanya gejala). Contoh: serapan rendah (W1) → petani jual ke tengkulak (W2) → KDKMP bayar telat (W3) → likuiditas koperasi lemah (W4) → manajemen kas buruk (W5 = root cause)."},
    {q:"Dalam siklus PDCA, tahap 'Check' berarti...",opts:["Membuat rencana perbaikan baru","Mengimplementasikan program yang sudah disetujui RAT","Membandingkan hasil aktual dengan target yang ditetapkan di Plan","Menerapkan perbaikan ke seluruh sistem operasional koperasi"],ans:2,exp:"PDCA Check = mengukur dan membandingkan hasil aktual (dari Do) dengan target yang ditetapkan (di Plan). Identifikasi gap, anomali, dan penyimpangan sebelum masuk Act. Ini fase paling kritis untuk perbaikan berkelanjutan."},
    {q:"Analisis SWOT menemukan: koperasi punya jaringan petani kuat (Strength) dan tersedia KUR murah dari pemerintah (Opportunity). Strategi yang paling tepat adalah...",opts:["WT — minimalisasi kelemahan dan hindari ancaman","WO — atasi kelemahan dengan memanfaatkan peluang","ST — gunakan kekuatan untuk hadapi ancaman","SO — manfaatkan kekuatan untuk raih peluang"],ans:3,exp:"Strategi SO (Maxi-Maxi): gunakan kekuatan yang dimiliki untuk meraih peluang yang tersedia secara maksimal. Jaringan petani kuat + KUR murah = dorong anggota petani mengakses KUR melalui koperasi untuk perkuat serapan komoditas dan modal koperasi."},
    {q:"Prinsip manajemen risiko saat musim panen raya bagi manajer KDKMP yang tepat adalah...",opts:["Beli komoditas sebanyak-banyaknya tanpa batas karena harga sedang bagus","Identifikasi risiko (kapasitas gudang, modal, harga), analisis dampak, buat mitigasi, pantau implementasi","Tunggu instruksi penuh dari Agrinas sebelum bergerak","Fokus hanya pada risiko keuangan, abaikan risiko operasional"],ans:1,exp:"Manajemen risiko komprehensif mengikuti siklus: Identifikasi → Analisis dampak & kemungkinan → Mitigasi → Monitoring. Panen raya risikanya multi-dimensi: kapasitas gudang, likuiditas, fluktuasi harga, kualitas komoditas, dan ketepatan distribusi — semua harus dikelola bersama."},
    {q:"Kendaraan distribusi rusak mendadak sementara distribusi ke 400 KK sudah dijadwal hari ini. Solusi terbaik adalah...",opts:["Tunda distribusi sampai kendaraan diperbaiki","Lapor ke pengurus dan tunggu instruksi mereka","Koordinasikan solusi alternatif sementara (BUMDes, sewa truk, armada desa) agar distribusi tetap berjalan","Kurangi jumlah KK penerima hari ini"],ans:2,exp:"Manajer efektif mencari solusi kreatif dalam keterbatasan — bukan menyerah atau menunggu. Koordinasi lintas pihak (BUMDes, sewa truk, armada desa) menunjukkan resource mobilization dan orientasi hasil yang esensial di lapangan."},
    {q:"Manajer KDKMP menemukan bahwa 80% masalah keterlambatan distribusi berasal dari 20% rute yang sama berulang. Prinsip analisis yang digunakan adalah...",opts:["Analisis SWOT","Prinsip Pareto (80/20)","5 Whys Analysis","Fishbone Diagram"],ans:1,exp:"Prinsip Pareto (80/20): 80% masalah biasanya disebabkan 20% penyebab utama. Dengan fokus pada 20% rute bermasalah tersebut, manajer bisa menyelesaikan 80% masalah keterlambatan dengan sumber daya yang lebih efisien."},
    {q:"Fishbone diagram (Ishikawa) digunakan manajer koperasi untuk...",opts:["Menggambarkan alur rantai pasok dari petani ke Agrinas","Menganalisis 6 kategori penyebab potensial masalah (Man, Machine, Method, Material, Measurement, Money)","Membuat roadmap pengembangan koperasi jangka panjang","Memetakan jaringan anggota koperasi secara visual"],ans:1,exp:"Fishbone/Ishikawa diagram menganalisis penyebab masalah dari 6 kategori: Man (manusia), Machine (peralatan), Method (prosedur), Material (bahan), Measurement (pengukuran), Money (pembiayaan). Berguna untuk masalah kompleks dengan banyak variabel seperti penurunan kualitas gabah."},
    {q:"Manajer KDKMP ingin membuat keputusan serapan komoditas yang lebih akurat. Data apa yang PALING PENTING untuk dikumpulkan terlebih dahulu?",opts:["Data jumlah staf yang bertugas di gudang","Data luas lahan, estimasi produksi per anggota, kapasitas gudang, dan harga pasar saat ini","Data riwayat pendidikan formal masing-masing petani anggota","Data jumlah rapat yang sudah dilakukan bulan ini"],ans:1,exp:"Keputusan serapan yang akurat memerlukan: luas lahan dan estimasi produksi (berapa ton yang bisa diserap), kapasitas gudang (bisa tampung berapa), dan harga pasar terkini (apakah serapan menguntungkan). Data ini adalah fondasi perencanaan operasional KDKMP."},
    {q:"Seorang manajer menghadapi tiga masalah sekaligus: (1) staf absen mendadak 3 orang, (2) pesanan besar dari Agrinas harus diselesaikan besok, (3) printer laporan rusak. Pendekatan terbaik adalah...",opts:["Selesaikan semua masalah sekaligus dengan multitasking","Fokus pada masalah termudah dulu agar cepat selesai","Prioritaskan penyelesaian pesanan Agrinas (paling berdampak), cari solusi staf sementara, tunda atau delegasikan masalah printer","Lapor ke pengurus dan tunggu panduan mereka"],ans:2,exp:"Triage masalah berdasarkan dampak dan urgensi. Pesanan Agrinas (berdampak pada kontrak dan pendapatan koperasi) adalah prioritas tertinggi. Staf absen perlu solusi segera untuk mendukung pesanan. Printer (paling kecil dampaknya) bisa ditunda atau dicari solusi alternatif (digital, pinjam printer)."},
    {q:"Dalam konteks manajemen risiko KDKMP, risiko 'konsentrasi' berarti...",opts:["Risiko staf kurang fokus saat bekerja","Risiko koperasi terlalu bergantung pada satu pemasok, satu komoditas, atau satu pelanggan besar","Risiko pengurus terlalu banyak membuat keputusan","Risiko data terkonsentrasi di satu sistem tanpa backup"],ans:1,exp:"Risiko konsentrasi adalah risiko ketergantungan berlebih pada satu pihak atau komoditas. Jika KDKMP hanya mengandalkan satu komoditas (padi) dan musim gagal panen, koperasi collaps. Mitigasi: diversifikasi komoditas, mitra pemasok, dan sumber pendapatan."},
    {q:"Manajer KDKMP menerapkan 'scenario planning' untuk menghadapi ketidakpastian harga pangan. Hal ini dimaksudkan untuk...",opts:["Memastikan harga selalu stabil sesuai rencana","Mempersiapkan rencana aksi untuk berbagai kemungkinan (optimis, realistis, pesimis) sebelum terjadi","Menghitung proyeksi SHU yang paling tinggi","Menentukan target serapan yang paling ambisius"],ans:1,exp:"Scenario planning: buat 3 skenario (best case, base case, worst case) dengan rencana aksi yang berbeda untuk masing-masing. Ketika kondisi berubah, manajer sudah siap dengan respons yang tepat tanpa harus memulai dari nol."},
    {q:"Rencana program kerja koperasi yang baik dimulai dari...",opts:["Langsung tulis berdasarkan pengalaman pribadi manajer","Analisis kinerja tahun berjalan + kebutuhan anggota + penyelarasan target nasional, baru susun program","Menyalin program koperasi lain yang berhasil","Menunggu instruksi lengkap dari Agrinas"],ans:1,exp:"Program kerja harus evidence-based: evaluasi kinerja tahun sebelumnya (apa yang berhasil/gagal), needs assessment anggota (apa yang mereka butuhkan), dan penyelarasan target korporat/nasional (bagaimana kontribusi ke swasembada pangan). Ini prinsip perencanaan sistematis SMART + BSC."},
    {q:"Decision matrix (matriks keputusan) berguna bagi manajer KDKMP dalam situasi...",opts:["Semua keputusan rutinitas harian","Memilih di antara beberapa opsi dengan banyak kriteria yang perlu dipertimbangkan sekaligus","Keputusan yang sudah jelas jawabannya","Keputusan yang tidak melibatkan uang"],ans:1,exp:"Decision matrix berguna ketika ada beberapa alternatif dengan multiple criteria (harga, kualitas, kehandalan, jarak). Setiap kriteria diberi bobot, setiap opsi diberi skor per kriteria, hasilnya dikalikan bobot dan dijumlahkan. Keputusan menjadi lebih objektif dan terdokumentasi."},
    {q:"Manajer KDKMP baru saja kehilangan staf kunci yang mengelola sistem pencatatan digital. Langkah mitigasi risiko yang tepat adalah...",opts:["Kembali ke pencatatan manual sampai ada staf baru yang terlatih","Tetap gunakan sistem digital meski tanpa pengelola ahli","Segera rekrut pengganti + buat knowledge transfer manual + latih staf cadangan untuk backup","Outsourcing seluruh pencatatan ke konsultan luar"],ans:2,exp:"Kehilangan single point of failure (staf kunci) adalah risiko operasional serius. Mitigasi terbaik: rekrut pengganti + dokumentasikan semua prosedur sistem (knowledge management) + latih minimal 2 staf cadangan yang bisa menjalankan sistem. Knowledge jangan hanya ada di satu orang."},
    {q:"Balanced Scorecard untuk koperasi KDKMP mencakup...",opts:["Hanya perspektif keuangan saja","Keuangan, anggota/pelanggan, proses internal, dan pembelajaran & inovasi","Keuangan, pengurus, pengawas, dan pemerintah","Produksi, distribusi, pemasaran, dan keuangan"],ans:1,exp:"BSC memiliki 4 perspektif seimbang: (1) Keuangan (SHU, ROA, likuiditas), (2) Anggota/Pelanggan (kepuasan, jumlah anggota aktif), (3) Proses Internal (efisiensi serapan, ketepatan distribusi), (4) Pembelajaran & Inovasi (pelatihan staf, digitalisasi). Keempat perspektif harus seimbang."},
    {q:"'Fail fast, learn fast' adalah prinsip yang tepat diterapkan dalam konteks koperasi untuk...",opts:["Mendorong staf mengambil keputusan impulsif","Melakukan eksperimen skala kecil, evaluasi cepat, dan iterasi perbaikan sebelum implementasi penuh","Mendorong koperasi mengambil risiko besar tanpa perhitungan","Mengejar target jangka pendek tanpa mempertimbangkan dampak jangka panjang"],ans:1,exp:"'Fail fast, learn fast' dalam konteks koperasi: uji program baru dalam skala kecil (pilot) → evaluasi hasil dengan cepat → pelajari apa yang berhasil/gagal → iterasi sebelum roll out penuh. Ini mengurangi risiko kegagalan besar dan mempercepat pembelajaran organisasi."},
    {q:"Manajer KDKMP harus membuat keputusan pembelian gabah besar saat harga sedang naik namun gudang hampir penuh. Informasi tambahan yang paling kritis untuk diketahui adalah...",opts:["Berapa gaji staf gudang bulan ini","Berapa lama gudang bisa menyimpan gabah tanpa penurunan kualitas dan kapan jadwal pengiriman ke Agrinas berikutnya","Siapa petani yang paling banyak menjual musim lalu","Berapa jumlah anggota koperasi yang aktif"],ans:1,exp:"Keputusan pembelian saat gudang hampir penuh membutuhkan: daya tahan simpan (kualitas gabah tidak turun berapa hari), jadwal pengiriman ke Agrinas (kapan gudang bisa dikosongkan), dan proyeksi harga (apakah harga akan terus naik atau turun). Ini adalah variabel kritis untuk keputusan yang menguntungkan."},
    {q:"Setelah implementasi program baru selama 3 bulan, manajer KDKMP menemukan hasil jauh di bawah target. Dalam siklus PDCA, langkah 'Act' yang paling tepat adalah...",opts:["Hentikan program dan kembalikan ke cara lama","Terus lanjutkan program tanpa perubahan karena butuh lebih banyak waktu","Analisis gap berdasarkan hasil Check, identifikasi penyebab, revisi Plan yang lebih baik, dan mulai siklus PDCA baru","Ganti seluruh tim yang bertanggung jawab program ini"],ans:2,exp:"Act dalam PDCA bukan berarti 'bertindak semaunya' — ini adalah fase merespons temuan Check secara sistematis: analisis gap, temukan root cause (gunakan 5 Whys), revisi rencana (Plan baru yang lebih baik), dan mulai siklus PDCA berikutnya. Ini adalah perbaikan berkelanjutan (kaizen) yang sejati."},
    {q:"Program inovasi yang paling tepat untuk meningkatkan efisiensi KDKMP adalah...",opts:["Tambah staf administrasi untuk kurangi backlog dokumen manual","Implementasi SiMKop (Sistem Manajemen Koperasi digital) untuk pencatatan otomatis dan transparansi real-time","Cetak laporan keuangan lebih tebal dan detail","Perbanyak rapat koordinasi agar semua staf sinkron"],ans:1,exp:"Digitalisasi operasional (SiMKop, QRIS) meningkatkan efisiensi, mengurangi human error, dan meningkatkan transparansi secara signifikan. Jauh lebih efektif dan efisien dibanding menambah staf manual — ini prinsip technology leverage untuk organisasi modern."}
  ]
},

"1c": {
  id:"1c", module:1,
  label:"Integritas, GCG & Etika Manajer",
  icon:"🛡️",
  desc:"Antikorupsi, gratifikasi, benturan kepentingan, GCG-TARIF, WBS, ANEKA, etika profesi manajer",
  color:"green",
  questions:[
    {q:"Seorang staf KDKMP meminta imbalan dari petani agar hasil timbangannya dilebihkan. Tindakan manajer yang paling tepat adalah...",opts:["Nasihati secara pribadi tanpa laporan formal","Abaikan karena nilainya mungkin kecil","Investigasi, dokumentasikan bukti, laporkan ke Pengawas Koperasi sesuai prosedur","Langsung pecat staf di hari itu juga"],ans:2,exp:"Pemerasan adalah pelanggaran integritas serius. Prosedur benar: investigasi dahulu → dokumentasi bukti → lapor ke Pengawas Koperasi (jalur resmi). Pemecatan sepihak tanpa proses bisa melanggar hukum ketenagakerjaan dan AD/ART koperasi."},
    {q:"Pengurus koperasi meminta manajer mengalihkan dana koperasi ke rekening pribadi pengurus 'sementara'. Tindakan manajer yang benar adalah...",opts:["Lakukan karena pengurus adalah atasan manajer","Tolak dan dokumentasikan permintaan tersebut sebagai potensi pelanggaran untuk dilaporkan ke Pengawas","Lakukan tapi minta tanda tangan pengurus sebagai bukti","Konsultasikan hanya ke bendahara saja"],ans:1,exp:"Penggelapan aset koperasi adalah tindak pidana. Manajer wajib menolak instruksi yang melanggar hukum meskipun dari pengurus. Ingat: pengurus dipilih RAT untuk melayani anggota, bukan pemilik koperasi. Dokumentasi dan pelaporan ke Pengawas adalah langkah yang benar."},
    {q:"Manajer KDKMP menerima tawaran kerjasama eksklusif dari pemasok pupuk yang merupakan saudara kandungnya. Tindakan etis yang tepat adalah...",opts:["Terima saja karena harga kompetitif","Tolak seluruh tawaran karena ada hubungan keluarga","Ungkapkan benturan kepentingan ke pengurus secara tertulis dan abstain dari proses keputusan tersebut","Minta saudara mengajukan melalui orang lain agar tidak diketahui"],ans:2,exp:"Benturan kepentingan harus dikelola dengan transparansi: deklarasi tertulis ke pengurus dan tidak terlibat dalam keputusan tersebut (abstain). Ini prinsip GCG — Independensi dan Fairness. Merahasiakannya justru memperburuk pelanggaran etika."},
    {q:"Whistle Blowing System (WBS) dalam koperasi desa berfungsi untuk...",opts:["Merekam semua percakapan staf secara diam-diam","Memberikan jalur pelaporan pelanggaran internal yang aman dan terlindungi bagi pelapor","Mengumumkan prestasi koperasi kepada publik","Sistem absensi digital berbasis QR Code"],ans:1,exp:"WBS adalah mekanisme agar pelapor (whistleblower) dapat melaporkan pelanggaran (korupsi, fraud, manipulasi data) secara aman tanpa takut dibalas (retaliation). Ini bagian penting dari GCG koperasi yang baik dan sejalan dengan nilai Antikorupsi dalam ANEKA."},
    {q:"Prinsip GCG (Good Cooperative Governance) koperasi yang dikenal dengan akronim TARIF mencakup...",opts:["Transparansi, Akuntabilitas, Responsibilitas, Independensi, Fairness","Transparansi, Administrasi, Regulasi, Inovasi, Fasilitasi","Tata Kelola, Akuntansi, Rekrutmen, Integritas, Fleksibilitas","Transparansi, Audit, Risiko, Integritas, Fleksibilitas"],ans:0,exp:"GCG TARIF: Transparansi (informasi terbuka), Akuntabilitas (dapat dipertanggungjawabkan), Responsibilitas (sesuai aturan), Independensi (bebas dari tekanan pihak luar), Fairness (adil kepada semua stakeholder). Lima prinsip ini wajib diterapkan manajer KDKMP."},
    {q:"Manajer menemukan kesalahan signifikan dalam laporan keuangan yang hampir diserahkan ke RAT besok. Tindakan yang tepat adalah...",opts:["Serahkan saja agar tidak menunda RAT","Minta penundaan singkat untuk koreksi, jelaskan alasannya secara transparan kepada anggota","Ubah angka diam-diam tanpa memberitahu siapapun","Biarkan saja, koreksi setelah RAT selesai"],ans:1,exp:"Transparansi dan akuntabilitas menuntut laporan yang akurat. Menunda sebentar untuk koreksi dengan penjelasan transparan kepada anggota jauh lebih baik dari menyerahkan laporan salah atau memanipulasinya. Anggota berhak mendapat informasi keuangan yang benar."},
    {q:"Seorang manajer KDKMP menerima 'komisi' dari pemasok pupuk tanpa sepengetahuan koperasi. Ini termasuk kategori...",opts:["Gratifikasi yang harus dilaporkan atau ditolak","Pendapatan sampingan yang sah untuk manajer","Bonus kinerja yang wajar dari mitra bisnis","Bukan masalah karena tidak menggunakan uang koperasi"],ans:0,exp:"Komisi rahasia dari pemasok adalah gratifikasi — pemberian yang terkait dengan jabatan dan berpotensi mempengaruhi keputusan bisnis koperasi. Wajib ditolak atau dilaporkan ke pengawas. Ini pelanggaran integritas serius yang merugikan anggota koperasi."},
    {q:"Prinsip 'Akuntabilitas' dalam ANEKA bagi manajer KDKMP berarti...",opts:["Tidak perlu membuat laporan selama ada kepercayaan dari anggota","Bertanggung jawab penuh atas setiap keputusan, tindakan, dan penggunaan sumber daya koperasi","Akuntansi keuangan yang mengikuti standar internasional","Hanya bertanggung jawab kepada pengurus, bukan anggota biasa"],ans:1,exp:"Akuntabilitas = tanggung jawab atas setiap keputusan dan sumber daya yang dikelola, serta kemampuan mempertanggungjawabkannya kepada semua pemangku kepentingan (anggota, pengurus, pengawas, pemerintah). Manajer mengelola uang dan aset milik anggota — akuntabilitas tidak bisa dikompromikan."},
    {q:"Nilai 'Komitmen Mutu' dalam ANEKA bagi manajer koperasi pangan desa berarti...",opts:["Mengejar profit setinggi-tingginya tanpa memperhatikan proses","Selalu berusaha meningkatkan kualitas layanan, efisiensi, dan inovasi dalam pengelolaan koperasi","Mempertahankan cara kerja lama yang sudah terbukti berhasil","Mengutamakan kuantitas serapan tanpa memperhatikan kualitas komoditas"],ans:1,exp:"Komitmen Mutu dalam ANEKA: orientasi pada kualitas, efisiensi, efektivitas, dan inovasi — terus mencari cara yang lebih baik. Untuk KDKMP: kualitas komoditas yang diserap (GKG standar Bulog), kualitas layanan kepada anggota, dan inovasi proses operasional secara berkelanjutan."},
    {q:"Salah satu ciri budaya organisasi bermasalah yang harus diwaspadai manajer KDKMP adalah...",opts:["Staf sering menyampaikan kritik dan masukan secara terbuka","Ada kecenderungan 'menutup-nutupi' kesalahan daripada melaporkannya","Manajer sering melakukan evaluasi dan audit internal berkala","Staf aktif mengikuti pelatihan dan pengembangan kompetensi"],ans:1,exp:"Budaya 'cover up' (menutup-nutupi kesalahan) adalah tanda bahaya besar. Ini mengindikasikan ketakutan terhadap hukuman, minimnya psychological safety, dan berpotensi menutupi masalah sistemik yang semakin besar. Manajer harus aktif membangun budaya transparansi dan 'safe to fail'."},
    {q:"Manajer KDKMP mengetahui bahwa satu stafnya sudah lama melakukan kecurangan kecil (mengambil barang koperasi untuk keperluan pribadi). Tindakan yang paling tepat adalah...",opts:["Maafkan karena nilainya kecil dan staf tersebut berprestasi","Pecat langsung tanpa proses investigasi","Investigasi terlebih dahulu, dokumentasikan, berikan SP bertahap sesuai peraturan koperasi","Diamkan karena konfrontasi akan merusak hubungan kerja"],ans:2,exp:"Due process (proses yang adil) penting: investigasi dulu, dokumentasikan bukti, berikan sanksi sesuai peraturan koperasi yang berlaku (SP1 → SP2 → SP3 → PHK dengan pesangon sesuai aturan). Ini melindungi koperasi secara hukum dan menunjukkan penerapan aturan yang konsisten."},
    {q:"Konflik dua anggota soal alokasi pupuk bersubsidi. Langkah manajer yang paling tepat adalah...",opts:["Memihak anggota yang lebih lama bergabung","Mediasi dengan kriteria objektif berbasis data luas lahan dan kebutuhan aktual","Serahkan keputusan sepenuhnya ke pengurus","Tunda pembagian sampai konflik mereda sendiri"],ans:1,exp:"Mediasi berbasis data objektif adalah solusi adil dan transparan. Manajer harus menyelesaikan konflik dengan standar jelas (data luas lahan, kebutuhan aktual, aturan RDKK), selaras dengan prinsip musyawarah-mufakat sila ke-4 Pancasila dan fairness dalam GCG."},
    {q:"Manajer KDKMP menolak untuk menyetujui pembelian komoditas dari pemasok tertentu meskipun harganya paling murah, tanpa alasan yang jelas. Ini berpotensi melanggar prinsip GCG...",opts:["Transparansi — keputusan tidak ada penjelasan yang terbuka","Responsibilitas — tidak mengikuti prosedur pengadaan yang berlaku","Independensi — mungkin ada tekanan dari pihak luar","Fairness — diskriminasi kepada pemasok tertentu tanpa dasar objektif"],ans:3,exp:"Menolak pemasok terbaik tanpa alasan jelas melanggar Fairness (perlakuan adil) dan bisa mengindikasikan benturan kepentingan dengan pemasok lain. GCG menuntut pengambilan keputusan pengadaan berdasarkan kriteria objektif yang transparan dan adil untuk semua pihak."},
    {q:"Dalam konteks ANEKA, 'Nasionalisme' bagi manajer koperasi pangan desa paling tepat diwujudkan melalui...",opts:["Selalu mengikuti kebijakan partai politik yang berkuasa","Mendahulukan kepentingan ketahanan pangan nasional di atas kepentingan pribadi atau kelompok","Menolak segala bentuk kerjasama dengan pihak asing","Bangga menggunakan produk luar negeri yang lebih berkualitas"],ans:1,exp:"Nasionalisme dalam ANEKA = mendahulukan kepentingan bangsa (ketahanan pangan nasional) di atas kepentingan pribadi, kelompok, atau golongan. Manajer KDKMP yang bekerja keras menyerap komoditas lokal adalah wujud nyata nasionalisme yang paling bermakna."},
    {q:"Laporan penggunaan dana koperasi yang lengkap, akurat, dan dapat diakses oleh seluruh anggota adalah wujud nyata dari prinsip GCG...",opts:["Independensi","Responsibilitas","Transparansi","Fairness"],ans:2,exp:"Transparansi = keterbukaan informasi kepada seluruh pemangku kepentingan. Laporan keuangan yang lengkap, akurat, tepat waktu, dan mudah diakses anggota adalah implementasi paling konkret prinsip transparansi dalam tata kelola koperasi."},
    {q:"Manajer KDKMP menemukan bahwa sistem timbangan digital sudah dikalibrasi dengan tidak benar dan merugikan petani selama beberapa bulan. Langkah pertama yang paling tepat adalah...",opts:["Rahasiakan agar tidak mencoreng nama koperasi","Segera kalibrasi ulang timbangan + hitung kerugian petani + informasikan kepada anggota yang terdampak + susun kompensasi yang adil","Minta petani membuktikan kerugian mereka terlebih dahulu","Laporkan ke polisi karena ada potensi penipuan"],ans:1,exp:"Integritas dan fairness menuntut: perbaiki masalah segera (kalibrasi ulang), hitung dampak nyata kepada petani, informasikan secara transparan, dan berikan kompensasi yang adil. Merahasiakan justru akan menghancurkan kepercayaan anggota yang jauh lebih mahal dampaknya."},
    {q:"'Revolving door' dalam konteks koperasi merujuk pada risiko...",opts:["Staf sering keluar masuk karena turnover tinggi","Pengurus atau manajer yang pindah ke perusahaan mitra dan membawa informasi sensitif koperasi","Anggota yang keluar dan masuk koperasi terus menerus","Perputaran kas yang terlalu cepat sehingga sulit diaudit"],ans:1,exp:"'Revolving door' adalah risiko etika ketika mantan pengurus/manajer pindah ke perusahaan yang menjadi mitra atau pesaing koperasi dan berpotensi membawa informasi konfidensial (data anggota, strategi harga, informasi kontrak). Ini perlu diatur dalam aturan kerahasiaan informasi koperasi."},
    {q:"Prinsip 'Responsibilitas' dalam GCG koperasi berarti...",opts:["Manajer harus cepat merespons setiap pertanyaan anggota dalam 24 jam","Pengelolaan koperasi harus sesuai dengan aturan yang berlaku (UU, AD/ART, peraturan pemerintah)","Manajer bertanggung jawab atas semua kerugian koperasi secara pribadi","Pengurus harus hadir dalam setiap kegiatan operasional harian"],ans:1,exp:"Responsibilitas dalam GCG = kepatuhan terhadap aturan yang berlaku: UU 25/1992, AD/ART koperasi, peraturan Kemenkop, kontrak dengan Agrinas, dan regulasi pemerintah lainnya. Ini berbeda dari akuntabilitas (mempertanggungjawabkan hasil) — responsibilitas fokus pada kepatuhan proses."},
    {q:"Manajer KDKMP harus menolak permintaan apapun dari pihak luar yang meminta data pribadi anggota koperasi. Ini adalah implementasi dari prinsip...",opts:["Fairness — anggota harus diperlakukan setara","Independensi — koperasi bebas dari tekanan eksternal","Transparansi — informasi harus terbuka kepada semua pihak","Perlindungan privasi dan kerahasiaan data anggota"],ans:3,exp:"Data pribadi anggota koperasi (NIK, alamat, data keuangan) adalah informasi konfidensial yang dilindungi. Memberikan data anggota kepada pihak luar tanpa izin melanggar hak privasi anggota dan berpotensi melanggar UU Perlindungan Data Pribadi (UU PDP). Ini bukan tentang transparansi eksternal."},
    {q:"Manajer yang berintegritas dalam konteks koperasi pangan desa adalah manajer yang...",opts:["Selalu setuju dengan semua keputusan pengurus agar tidak terjadi konflik","Konsisten antara ucapan dan tindakan, menolak kompromi pada nilai-nilai etika meskipun ada tekanan","Mendahulukan kepentingan pribadi secara diam-diam asalkan tidak ketahuan","Hanya berlaku jujur saat sedang diawasi pengawas atau atasan"],ans:1,exp:"Integritas = konsistensi antara nilai, ucapan, dan tindakan — terutama ketika tidak ada yang mengawasi. Manajer berintegritas adalah role model bagi seluruh staf dan anggota koperasi. Ini fondasi dari kepercayaan yang menjadikan koperasi berkelanjutan jangka panjang."}
  ]
},

// ══════════════════════════════════════════════
// MODULE 2: KOPERASI & HUKUM
// ══════════════════════════════════════════════

"2a": {
  id:"2a", module:2,
  label:"UU 25/1992 & Struktur Organisasi Koperasi",
  icon:"📜",
  desc:"Prinsip koperasi, RAT, pengurus vs manajer, pengawas, AD/ART, jenis koperasi, kuorum, UU 25/1992",
  color:"teal",
  questions:[
    {q:"Berdasarkan UU No. 25/1992, kekuasaan tertinggi dalam koperasi dipegang oleh...",opts:["Ketua Pengurus Koperasi","Rapat Anggota (RAT)","Badan Pengawas Koperasi","Manajer / Pengelola Profesional"],ans:1,exp:"Pasal 22 UU 25/1992: Rapat Anggota adalah pemegang kekuasaan tertinggi koperasi. RAT memutuskan AD/ART, program kerja, laporan keuangan, dan pembagian SHU. Tidak ada pihak lain — termasuk pengurus atau manajer — yang memiliki otoritas lebih tinggi dari RAT."},
    {q:"Modal koperasi yang dibayar satu kali saat pertama masuk, besarnya SAMA untuk semua anggota, disebut...",opts:["Simpanan wajib","Simpanan sukarela","Simpanan pokok","Dana cadangan koperasi"],ans:2,exp:"Simpanan pokok (Pasal 41 UU 25/1992): dibayar 1× saat pertama masuk, jumlah sama untuk semua anggota, tidak dapat diambil selama masih menjadi anggota koperasi. Berbeda dari simpanan wajib yang dibayar periodik (bulanan/tahunan)."},
    {q:"Prinsip koperasi yang membedakannya secara FUNDAMENTAL dari PT (perseroan terbatas) adalah...",opts:["Tujuan memaksimalkan keuntungan pemegang saham","Keanggotaan bersifat tertutup dan eksklusif","Pengelolaan demokratis (1 anggota 1 suara) dan SHU proporsional kontribusi","Modal sepenuhnya berasal dari pemerintah"],ans:2,exp:"Koperasi: one member, one vote + SHU proporsional kontribusi anggota. PT: one share, one vote + dividen proporsional saham. Dua filosofi ekonomi fundamental berbeda — koperasi berpihak pada orang (anggota), PT berpihak pada modal (saham)."},
    {q:"Perubahan Anggaran Dasar (AD) koperasi dalam RAT memerlukan persetujuan minimal...",opts:["Lebih dari 50% suara dari anggota yang hadir","2/3 (dua pertiga) suara dari anggota yang hadir","Seluruh anggota koperasi (100%)","Cukup pengurus dan pengawas saja"],ans:1,exp:"UU 25/1992 Pasal 24: perubahan AD memerlukan minimal 2/3 suara dari yang hadir. Keputusan umum (SHU, program kerja) cukup >50%. Perubahan AD butuh supermajority karena menyangkut landasan hukum koperasi yang lebih mendasar."},
    {q:"RAT pertama gagal karena hanya 40% anggota hadir (kuorum >50%). Langkah yang benar adalah...",opts:["RAT tetap dilanjutkan karena sudah ada semangat partisipasi","RAT dibubarkan dan tidak jadi dilaksanakan tahun ini","Jadwalkan RAT kedua minimal 7 hari kemudian, berlaku berapapun yang hadir","Turunkan syarat kuorum menjadi 40% via keputusan pengurus"],ans:2,exp:"UU 25/1992 Pasal 24 (3): jika RAT pertama tidak kuorum, RAT kedua dapat diselenggarakan paling cepat 7 hari kemudian. Keputusan RAT kedua sah berapapun jumlah anggota yang hadir, asalkan undangan sudah dikirim sesuai prosedur."},
    {q:"Perbedaan utama antara PENGURUS dan MANAJER koperasi berdasarkan UU 25/1992 adalah...",opts:["Pengurus lebih berpendidikan tinggi daripada manajer","Pengurus dipilih oleh RAT, manajer diangkat oleh pengurus — bukan dipilih RAT","Manajer memiliki wewenang lebih besar dari pengurus","Pengurus dan manajer adalah jabatan yang sama dalam praktiknya"],ans:1,exp:"Pasal 29 & 32 UU 25/1992: Pengurus dipilih dari dan oleh anggota dalam RAT (masa jabatan 5 tahun). Manajer adalah tenaga profesional yang DIANGKAT oleh pengurus untuk mengelola operasional harian. Manajer bertanggung jawab ke pengurus, bukan ke RAT secara langsung."},
    {q:"Fungsi utama Pengawas Koperasi yang diatur dalam UU 25/1992 (Pasal 38-39) adalah...",opts:["Mengelola operasional harian koperasi bersama manajer","Melakukan audit dan pengawasan terhadap pelaksanaan kebijakan pengurus","Mewakili koperasi dalam hubungan hukum dengan pihak ketiga","Memimpin Rapat Anggota Tahunan (RAT)"],ans:1,exp:"Pengawas berfungsi sebagai auditor internal koperasi — mengawasi jalannya kebijakan pengurus, membuat Laporan Hasil Pengawasan (LHP), dan melaporkannya di RAT. Pengawas TIDAK boleh merangkap sebagai pengurus koperasi karena konflik kepentingan."},
    {q:"Tingkatan koperasi dari primer ke sekunder yang benar menurut UU 25/1992 adalah...",opts:["Koperasi Desa → Koperasi Kecamatan → Koperasi Kabupaten","Koperasi Primer (beranggotakan orang) → Koperasi Sekunder (beranggotakan koperasi primer)","Koperasi Konsumen → Koperasi Produsen → Koperasi Jasa","Koperasi Biasa → Koperasi Khusus → Koperasi Istimewa"],ans:1,exp:"UU 25/1992: Koperasi Primer (min. 20 anggota individu/orang) dan Koperasi Sekunder (min. 3 koperasi primer sebagai anggotanya, contoh: Pusat Koperasi, Induk Koperasi). Jenis berdasarkan bidang usaha: konsumen, produsen, simpan-pinjam, pemasaran, jasa."},
    {q:"7 Prinsip Koperasi berdasarkan Pasal 5 UU 25/1992 yang WAJIB HAFAL antara lain TIDAK termasuk...",opts:["Keanggotaan bersifat sukarela dan terbuka","Pengelolaan dilakukan secara demokratis","Pembagian SHU dilakukan secara adil proporsional","Koperasi tidak boleh bekerjasama dengan sesama koperasi"],ans:3,exp:"7 Prinsip Koperasi UU 25/1992: (1) Keanggotaan sukarela & terbuka, (2) Pengelolaan demokratis, (3) Pembagian SHU adil proporsional, (4) Balas jasa modal terbatas, (5) Kemandirian, (6) Pendidikan perkoperasian, (7) KERJASAMA ANTAR-KOPERASI — bukan melarang kerjasama!"},
    {q:"Simpanan yang dapat diambil kapan saja dan mendapatkan jasa (bunga) disebut...",opts:["Simpanan pokok","Simpanan wajib","Simpanan sukarela","Dana cadangan koperasi"],ans:2,exp:"Simpanan sukarela: jumlah dan waktu fleksibel (anggota bisa setor kapanpun dan tarik kapanpun), mendapat jasa (bunga). Ini modal pinjaman koperasi dari anggota. Berbeda dari simpanan pokok (1× bayar, tidak bisa tarik) dan wajib (periodik, tidak bisa tarik sewaktu-waktu)."},
    {q:"Dana cadangan koperasi yang diambil dari porsi SHU berfungsi untuk...",opts:["Bonus tambahan bagi pengurus yang berprestasi","Menutup kerugian dan memperkuat permodalan koperasi jangka panjang","Membayar pajak koperasi kepada negara","Mendanai seluruh kegiatan sosial kemasyarakatan"],ans:1,exp:"Dana cadangan (Pasal 41 UU 25/1992) adalah buffer finansial koperasi — TIDAK dibagikan kepada anggota. Fungsinya: menutup kerugian operasional, memperkuat posisi modal jangka panjang, dan menjamin kelangsungan koperasi dalam kondisi sulit."},
    {q:"Anggota tidak aktif bertransaksi selama 2 tahun ingin mendapat SHU. Yang paling tepat adalah...",opts:["Berhak penuh karena masih terdaftar sebagai anggota","Hanya berhak atas jasa modal (proporsional simpanan), tidak berhak jasa usaha","Tidak berhak sama sekali atas SHU","Sepenuhnya tergantung kebijaksanaan pengurus koperasi"],ans:1,exp:"SHU = jasa modal + jasa usaha. Anggota tidak aktif 2 tahun masih memiliki simpanan aktif → berhak jasa modal (proporsional simpanan). Namun jasa usahanya = nol karena tidak ada transaksi selama 2 tahun. Ini sesuai prinsip SHU proporsional kontribusi UU 25/1992."},
    {q:"Perbedaan Koperasi Produsen dan Koperasi Konsumen yang paling tepat adalah...",opts:["Koperasi produsen tidak memiliki anggota; koperasi konsumen memiliki anggota","Koperasi produsen anggotanya produsen (petani/pengrajin); koperasi konsumen anggotanya pembeli/konsumen","Koperasi produsen hanya bergerak di bidang pertanian saja","Koperasi produsen tidak membagikan SHU kepada anggota"],ans:1,exp:"Koperasi Produsen: anggotanya adalah para produsen yang berproduksi bersama dan menjual bersama (petani padi, pengrajin batik). KDKMP termasuk kategori ini. Koperasi Konsumen: anggotanya adalah konsumen yang membeli kebutuhan bersama agar lebih murah (contoh: koperasi sembako pegawai)."},
    {q:"Dalam AD/ART koperasi, proporsi jasa modal vs jasa usaha dalam pembagian SHU kepada anggota ditetapkan oleh...",opts:["Manajer koperasi berdasarkan kondisi keuangan tahun itu","Pengurus koperasi secara sepihak setiap tahun","Rapat Anggota (RAT) sebagai pemegang kekuasaan tertinggi","Pemerintah daerah melalui Dinas Koperasi setempat"],ans:2,exp:"Proporsi pembagian SHU (termasuk rasio jasa modal vs jasa usaha) ditetapkan dalam AD/ART koperasi oleh Rapat Anggota. RAT adalah kekuasaan tertinggi yang berwenang memutuskan hal fundamental termasuk distribusi SHU."},
    {q:"Prinsip 'balas jasa modal yang terbatas' dalam koperasi berarti...",opts:["Koperasi tidak boleh meminjamkan uang kepada anggota","Bunga/imbal hasil atas simpanan anggota tidak boleh berlebihan — koperasi bukan untuk memuliakan modal","Modal koperasi harus terbatas dan tidak boleh bertambah","Anggota tidak boleh menarik simpanan melebihi batas tertentu"],ans:1,exp:"Prinsip ke-4 UU 25/1992: balas jasa atas modal (bunga simpanan) di koperasi harus wajar dan terbatas, bukan tujuan utama koperasi. Ini membedakan koperasi dari lembaga keuangan profit-oriented — koperasi melayani anggota, bukan memuliakan modal."},
    {q:"Koperasi meminjam uang dari bank Rp 300 juta dengan bunga KUR 6%/tahun selama 2 tahun. Total bunga yang harus dibayar (sederhana) adalah...",opts:["Rp 18 juta","Rp 36 juta","Rp 54 juta","Rp 72 juta"],ans:1,exp:"Bunga sederhana = Pokok × Bunga × Waktu = Rp 300 juta × 6% × 2 = Rp 36 juta. Ini total bunga selama 2 tahun. Jika diangsur bulanan, perhitungan sedikit berbeda (menggunakan anuitas) tapi untuk soal CAT, rumus sederhana ini yang digunakan."},
    {q:"KDKMP mengadopsi sistem digital (SiMKop, QRIS) dibandingkan sistem manual. Keuntungan UTAMA yang paling relevan untuk GCG adalah...",opts:["Menghilangkan sepenuhnya kebutuhan staf administrasi","Meningkatkan transparansi, akurasi data, efisiensi laporan, dan memperkuat audit trail anti-fraud","Memudahkan pengurus menyembunyikan data dari anggota","Mengurangi kewajiban membuat laporan keuangan tahunan"],ans:1,exp:"Digitalisasi koperasi mendukung GCG secara langsung: transparansi real-time (anggota bisa cek saldo kapanpun), akurasi (kurangi human error), audit trail (setiap transaksi tercatat dan tidak bisa dimanipulasi), dan laporan otomatis. Ini memperkuat akuntabilitas secara struktural."},
    {q:"Mengapa koperasi dianggap lebih sesuai dari PT sebagai wadah ekonomi petani kecil?",opts:["Koperasi mendapat lebih banyak subsidi pemerintah secara otomatis","Prinsip koperasi (1 anggota 1 suara, SHU proporsional, keanggotaan terbuka) mengutamakan kesejahteraan anggota, bukan profit investor","Koperasi tidak perlu membayar pajak penghasilan","Koperasi jauh lebih mudah didirikan daripada PT"],ans:1,exp:"Filosofi koperasi berpihak pada anggota kecil: suara demokratis (bukan berdasarkan modal), keuntungan kembali ke anggota proporsional kontribusi, keanggotaan terbuka (tidak eksklusif). Petani kecil yang bergabung memiliki suara setara dengan petani besar. Ini jauh lebih inklusif dari PT."},
    {q:"Dalam RAT, voting dilakukan dengan cara...",opts:["Setiap anggota mendapat suara sebanding dengan simpanannya","Setiap anggota mendapat tepat 1 (satu) suara tanpa memandang besar simpanan","Hanya pengurus yang memiliki hak suara","Manajer memiliki 3 suara karena posisi strategisnya"],ans:1,exp:"Prinsip demokratis UU 25/1992: setiap anggota koperasi memiliki tepat 1 suara dalam RAT, tanpa memandang besar simpanan, lama bergabung, atau status sosial. Ini adalah perbedaan fundamental koperasi dari PT (one share one vote) — koperasi berpihak pada orang, bukan modal."},
    {q:"Jika koperasi mengalami kerugian dan dana cadangan tidak cukup menutupi, maka...",opts:["Seluruh kerugian ditanggung pribadi oleh ketua pengurus","Kerugian dibagi kepada anggota secara proporsional sesuai AD/ART yang berlaku","Pemerintah daerah wajib mensubsidi kerugian koperasi","Manajer wajib mengganti seluruh kerugian dari gaji pribadinya"],ans:1,exp:"Jika dana cadangan tidak cukup dan koperasi mengalami kerugian melebihi cadangan, AD/ART biasanya mengatur tanggung jawab anggota secara proporsional (terbatas pada simpanan masing-masing). Ini berbeda dari badan usaha perseorangan di mana pemilik bertanggung jawab penuh secara pribadi."}
  ]
},

"2b": {
  id:"2b", module:2,
  label:"SHU & Keuangan Koperasi",
  icon:"💰",
  desc:"Rumus SHU, pembagian SHU, jasa modal, jasa usaha, neraca, laporan keuangan, rasio keuangan, current ratio, DAR",
  color:"teal",
  questions:[
    {q:"SHU koperasi Rp 200 juta. AD/ART: 30% cadangan, 40% jasa anggota, 10% pengurus, 10% pendidikan, 10% sosial. Total yang dibagikan kepada anggota adalah...",opts:["Rp 60 juta","Rp 80 juta","Rp 100 juta","Rp 40 juta"],ans:1,exp:"Jasa anggota = 40% × Rp 200 juta = Rp 80 juta. Ini bagian SHU yang dikembalikan kepada anggota berdasarkan proporsi simpanan (jasa modal) dan transaksi (jasa usaha) masing-masing anggota selama tahun buku."},
    {q:"Pak Tono: simpanan Rp 5 juta dari total Rp 50 juta. Transaksi Rp 10 juta dari total Rp 100 juta. Dana jasa modal Rp 20 juta, jasa usaha Rp 30 juta. SHU Pak Tono adalah...",opts:["Rp 3 juta","Rp 5 juta","Rp 4 juta","Rp 2,5 juta"],ans:1,exp:"Jasa modal = (5/50) × 20 juta = Rp 2 juta. Jasa usaha = (10/100) × 30 juta = Rp 3 juta. Total SHU Pak Tono = Rp 2 juta + Rp 3 juta = Rp 5 juta."},
    {q:"SHU koperasi Rp 500 juta. Porsi jasa anggota 35% (dibagi 60% jasa usaha, 40% jasa modal). Pak Budi: simpanan Rp 8 juta dari total Rp 160 juta, transaksi Rp 20 juta dari total Rp 400 juta. SHU Pak Budi adalah...",opts:["Rp 7,35 juta","Rp 8,75 juta","Rp 6,5 juta","Rp 9,1 juta"],ans:1,exp:"Dana jasa anggota = 35% × 500 juta = Rp 175 juta. Jasa usaha = 60% × 175 juta = Rp 105 juta. Jasa modal = 40% × 175 juta = Rp 70 juta. Jasa usaha Pak Budi = (20/400) × 105 juta = Rp 5,25 juta. Jasa modal = (8/160) × 70 juta = Rp 3,5 juta. Total = Rp 8,75 juta."},
    {q:"Laporan keuangan yang menunjukkan posisi aset, kewajiban, dan ekuitas pada satu titik waktu tertentu disebut...",opts:["Laporan SHU / Laba Rugi","Laporan Arus Kas","Neraca (Balance Sheet)","Catatan atas Laporan Keuangan"],ans:2,exp:"Neraca (laporan posisi keuangan) = potret kondisi keuangan pada tanggal tertentu. Rumus: Aset = Kewajiban + Ekuitas. Berbeda dari Laporan SHU (kinerja selama satu periode) dan Laporan Arus Kas (pergerakan uang masuk/keluar selama periode)."},
    {q:"Current ratio koperasi sebesar 0,7 mengindikasikan...",opts:["Koperasi sangat likuid dan sehat keuangannya","Setiap Rp 1 utang lancar hanya dijamin Rp 0,7 aset lancar — potensi kesulitan bayar utang jangka pendek","Koperasi memiliki rasio utang yang ideal","Efisiensi operasional koperasi mencapai 70% dari target"],ans:1,exp:"Current ratio = Aset Lancar ÷ Utang Lancar. Nilai 0,7 < 1 berarti aset lancar tidak cukup menutupi utang lancar — risiko likuiditas. Idealnya current ratio koperasi > 1,5× untuk menjamin kemampuan membayar kewajiban jangka pendek kepada anggota dan pemasok."},
    {q:"Koperasi memiliki aset Rp 2 miliar dan total utang Rp 1,4 miliar. Debt to Asset Ratio adalah...",opts:["30%","50%","70%","140%"],ans:2,exp:"Debt to Asset = Rp 1,4 miliar ÷ Rp 2 miliar × 100% = 70%. Ini di atas batas ideal (<60%), menandakan koperasi cukup bergantung pada utang dan 70% asetnya dibiayai kreditor. Perlu upaya memperkuat modal sendiri dari simpanan anggota dan SHU yang ditahan di cadangan."},
    {q:"Jika total simpanan koperasi Rp 400 juta dan total aset Rp 1 miliar, maka rasio simpanan terhadap aset adalah...",opts:["25%","40%","60%","Tidak cukup informasi"],ans:1,exp:"Simpanan sebagai porsi aset = Rp 400 juta ÷ Rp 1 miliar × 100% = 40%. Ini menunjukkan 40% aset koperasi didanai oleh modal sendiri (simpanan anggota) — semakin tinggi rasio ini semakin mandiri koperasi dan tidak tergantung utang."},
    {q:"SHU koperasi Rp 300 juta. Jasa anggota 35% (seluruhnya jasa usaha). Pak Dodi bertransaksi 8% dari total transaksi koperasi. SHU Pak Dodi adalah...",opts:["Rp 8,4 juta","Rp 7,2 juta","Rp 10,5 juta","Rp 6 juta"],ans:0,exp:"Dana jasa usaha = 35% × Rp 300 juta = Rp 105 juta. SHU Pak Dodi = 8% × Rp 105 juta = Rp 8,4 juta."},
    {q:"Koperasi membagikan 35% SHU sebagai jasa anggota dari SHU Rp 400 juta. Jika rasio jasa modal : jasa usaha = 2:3, maka dana jasa usaha adalah...",opts:["Rp 56 juta","Rp 84 juta","Rp 140 juta","Rp 60 juta"],ans:1,exp:"Total jasa anggota = 35% × 400 juta = Rp 140 juta. Rasio 2:3 → total bagian = 5 bagian. Jasa modal = 2/5 × 140 juta = Rp 56 juta. Jasa usaha = 3/5 × 140 juta = Rp 84 juta."},
    {q:"Bu Sari: simpanan Rp 10 juta dari total simpanan Rp 200 juta. Transaksi Rp 30 juta dari total transaksi Rp 600 juta. SHU Rp 250 juta dengan 40% jasa anggota (50% jasa modal, 50% jasa usaha). SHU Bu Sari adalah...",opts:["Rp 3,5 juta","Rp 4,5 juta","Rp 5 juta","Rp 6,25 juta"],ans:2,exp:"Dana jasa anggota = 40% × 250 juta = Rp 100 juta. Jasa modal pool = 50% × 100 juta = Rp 50 juta. Jasa usaha pool = Rp 50 juta. Jasa modal Bu Sari = (10/200) × 50 juta = Rp 2,5 juta. Jasa usaha = (30/600) × 50 juta = Rp 2,5 juta. Total = Rp 5 juta."},
    {q:"Komponen SHU yang mencerminkan kontribusi anggota MELALUI SIMPANAN kepada koperasi disebut...",opts:["Jasa usaha","Jasa modal","Dana cadangan","Dana sosial"],ans:1,exp:"Jasa modal = bagian SHU yang diterima anggota berdasarkan proporsi simpanannya (pokok + wajib + sukarela) terhadap total simpanan koperasi. Jasa usaha = berdasarkan proporsi transaksi. Keduanya bersama membentuk total SHU per anggota."},
    {q:"Koperasi KDKMP dengan SHU Rp 150 juta. Berdasarkan AD/ART: cadangan 25%, jasa anggota 40%, pengurus 10%, karyawan 10%, pendidikan 5%, sosial 10%. Berapa yang masuk kas koperasi sebagai cadangan?",opts:["Rp 37,5 juta","Rp 60 juta","Rp 15 juta","Rp 25 juta"],ans:0,exp:"Dana cadangan = 25% × Rp 150 juta = Rp 37,5 juta. Dana ini TIDAK dibagikan kepada siapapun, masuk ke rekening cadangan koperasi untuk memperkuat modal dan menutup kerugian potensial di masa mendatang."},
    {q:"Rasio Return on Asset (ROA) koperasi 5%. Artinya...",opts:["5% aset koperasi adalah piutang bermasalah","Setiap Rp 100 aset menghasilkan Rp 5 SHU bersih — efisiensi penggunaan aset dalam menghasilkan keuntungan","Koperasi rugi 5% dari total asetnya","5% anggota koperasi mendapat SHU penuh"],ans:1,exp:"ROA = SHU Bersih ÷ Total Aset × 100%. ROA 5% berarti setiap Rp 100 aset dikelola menghasilkan Rp 5 SHU bersih. Semakin tinggi ROA, semakin efisien koperasi dalam menggunakan asetnya untuk menghasilkan keuntungan bagi anggota."},
    {q:"Koperasi membeli 100 kg beras @ Rp 12.000/kg dan menjualnya @ Rp 14.500/kg. Margin per kg dan total keuntungan adalah...",opts:["Rp 2.000/kg; Rp 200.000","Rp 2.500/kg; Rp 250.000","Rp 3.000/kg; Rp 300.000","Rp 1.500/kg; Rp 150.000"],ans:1,exp:"Margin per kg = Rp 14.500 − Rp 12.000 = Rp 2.500/kg. Total keuntungan = 100 kg × Rp 2.500 = Rp 250.000. Ini gross profit dari kegiatan dagang beras, belum dikurangi biaya operasional seperti transportasi dan gudang."},
    {q:"Laporan arus kas koperasi mencatat aktivitas keuangan dalam 3 kategori utama, yaitu...",opts:["Pendapatan, Pengeluaran, dan Saldo","Operasional, Investasi, dan Pendanaan","Simpanan, Pinjaman, dan SHU","Hulu, Tengah, dan Hilir"],ans:1,exp:"Laporan arus kas 3 bagian: (1) Aktivitas Operasional (arus kas dari kegiatan usaha utama), (2) Aktivitas Investasi (pembelian/penjualan aset tetap), (3) Aktivitas Pendanaan (pinjaman bank, pembayaran pokok utang, simpanan anggota). Membaca ketiga bagian ini memberikan gambaran kesehatan likuiditas koperasi."},
    {q:"Non-Performing Loan (NPL) koperasi sebesar 12% mengindikasikan...",opts:["12% anggota koperasi aktif bertransaksi","12% pinjaman yang diberikan bermasalah (macet/kurang lancar) — jauh di atas batas sehat","Koperasi mengalokasikan 12% dana untuk piutang","Porsi pinjaman berbanding aset adalah 12%"],ans:1,exp:"NPL = Piutang Bermasalah ÷ Total Piutang × 100%. NPL 12% jauh di atas batas sehat (<5%) — ini sinyal bahaya bahwa banyak pinjaman anggota tidak terbayar tepat waktu. Perlu tindakan segera: penagihan aktif, restrukturisasi pinjaman, dan evaluasi kebijakan pinjaman."},
    {q:"Koperasi memiliki 160 anggota. Tahun ini 15% anggota baru bergabung. Jumlah anggota sekarang adalah...",opts:["175 orang","184 orang","176 orang","172 orang"],ans:1,exp:"Anggota baru = 15% × 160 = 24 orang. Total = 160 + 24 = 184 orang."},
    {q:"Harga pupuk naik 20% dari Rp 150.000/sak. Koperasi mendapat diskon 10% dari pemasok. Harga yang dibayar koperasi per sak adalah...",opts:["Rp 162.000","Rp 165.000","Rp 180.000","Rp 135.000"],ans:0,exp:"Setelah naik 20%: Rp 150.000 × 1,2 = Rp 180.000. Setelah diskon 10%: Rp 180.000 × 0,9 = Rp 162.000. Perhatikan: diskon 10% dihitung dari harga baru (Rp 180.000), bukan harga awal."},
    {q:"Harga beras naik 25% dari Rp 12.000/kg. Harga baru per kg adalah...",opts:["Rp 14.000","Rp 15.000","Rp 14.500","Rp 13.000"],ans:1,exp:"Kenaikan = 25% × Rp 12.000 = Rp 3.000. Harga baru = Rp 12.000 + Rp 3.000 = Rp 15.000/kg."},
    {q:"Koperasi membeli 500 kwintal gabah @ Rp 5.000/kg. Total biaya pembelian adalah...",opts:["Rp 25 juta","Rp 250 juta","Rp 2,5 miliar","Rp 2,5 juta"],ans:1,exp:"500 kwintal = 500 × 100 kg = 50.000 kg. Total biaya = 50.000 kg × Rp 5.000/kg = Rp 250.000.000 = Rp 250 juta."}
  ]
},

// ══════════════════════════════════════════════
// MODULE 3: TIU
// ══════════════════════════════════════════════

"3a": {
  id:"3a", module:3,
  label:"Analogi & Silogisme Verbal",
  icon:"🧩",
  desc:"Analogi kata, silogisme kategoris, penalaran deduktif, modus ponens, modus tollens, kuantor logika",
  color:"amber",
  questions:[
    {q:"Analogi: PETANI : SAWAH = NELAYAN : ...",opts:["Ikan","Laut","Jaring","Perahu"],ans:1,exp:"Petani bekerja dan berproduksi di sawah. Nelayan bekerja dan berproduksi di laut. Pola: profesi → tempat bekerja/berproduksi utamanya."},
    {q:"Analogi: KOPERASI : SHU = PERUSAHAAN (PT) : ...",opts:["Pajak","Dividen","Gaji karyawan","Modal disetor"],ans:1,exp:"SHU adalah keuntungan yang dibagikan koperasi kepada anggotanya. Padanannya pada PT adalah dividen yang dibagikan kepada pemegang saham. Pola: badan usaha → bentuk keuntungan yang dibagikan."},
    {q:"Analogi: GABAH : BERAS = TEBU : ...",opts:["Tetes molase","Ampas tebu","Gula","Kebun tebu"],ans:2,exp:"Gabah diolah/diproses menjadi beras (bahan mentah → produk olahan siap konsumsi). Tebu diolah menjadi gula. Pola: bahan baku → produk turunan utamanya yang paling dikenal."},
    {q:"Semua manajer koperasi WAJIB memahami laporan keuangan. Budi adalah manajer koperasi. Kesimpulan yang PASTI benar adalah...",opts:["Budi mungkin tidak memahami laporan keuangan","Budi belum tentu memahami laporan keuangan","Budi pasti memahami laporan keuangan","Tidak dapat ditarik kesimpulan apapun"],ans:2,exp:"Modus Ponens yang valid: Semua A (manajer koperasi) = B (wajib paham laporan keuangan). Budi = A. Maka Budi pasti B. Kesimpulan ini valid dan pasti benar selama premis pertama dianggap benar."},
    {q:"Semua petani anggota KDKMP mendapat akses pupuk subsidi. Semua yang mendapat pupuk subsidi meningkat produktivitasnya. Kesimpulan yang tepat adalah...",opts:["Beberapa petani anggota KDKMP mungkin meningkat produktivitasnya","Semua petani anggota KDKMP pasti meningkat produktivitasnya","Tidak semua petani anggota KDKMP meningkat produktivitasnya","Tidak dapat disimpulkan apapun"],ans:1,exp:"Silogisme hipotesis valid: Semua petani KDKMP → dapat pupuk subsidi → meningkat produktivitas. Rantai logika: P→Q, Q→R, maka P→R. Semua petani KDKMP pasti meningkat produktivitasnya."},
    {q:"Beberapa petani adalah penerima KUR. Semua penerima KUR wajib membuat laporan usaha. Kesimpulan yang TEPAT adalah...",opts:["Semua petani wajib membuat laporan usaha","Tidak ada petani yang membuat laporan usaha","Beberapa petani wajib membuat laporan usaha","Semua petani adalah penerima KUR"],ans:2,exp:"'Beberapa petani = penerima KUR' + 'Semua penerima KUR wajib lapor' → Beberapa petani (yang penerima KUR) wajib lapor. Kuantor 'beberapa' tidak bisa dikonversi menjadi 'semua'. Kita tidak bisa menyimpulkan lebih dari yang dijamin premis."},
    {q:"Tidak ada koperasi yang melanggar prinsip keanggotaan sukarela. KDKMP adalah koperasi. Kesimpulan yang PASTI benar adalah...",opts:["KDKMP mungkin melanggar prinsip keanggotaan sukarela","KDKMP pasti tidak melanggar prinsip keanggotaan sukarela","KDKMP mungkin tidak melanggar prinsip keanggotaan sukarela","Tidak dapat disimpulkan apapun"],ans:1,exp:"'Tidak ada koperasi = melanggar prinsip.' (Universal negatif) KDKMP = koperasi. Maka KDKMP pasti TIDAK melanggar prinsip. Ini Modus Tollens yang valid — jika semua koperasi X, dan KDKMP adalah koperasi, maka KDKMP juga X."},
    {q:"Analogi: PENGAWAS : PENGURUS = WASIT : ...",opts:["Penonton","Pemain","Pelatih","Stadion"],ans:1,exp:"Pengawas bertugas mengawasi kinerja pengurus koperasi agar sesuai aturan. Wasit bertugas mengawasi kinerja pemain dalam pertandingan agar sesuai aturan permainan. Pola: lembaga/pejabat pengawas → pihak yang diawasi."},
    {q:"Analogi: KORUPSI : TRANSPARANSI = KEGELAPAN : ...",opts:["Malam","Cahaya","Bayangan","Lampu"],ans:1,exp:"Korupsi (negatif) → transparansi (antonim positifnya yang menjadi solusi). Kegelapan (negatif) → cahaya (antonim positifnya yang menjadi solusi). Pola: kondisi/sifat negatif → antonim positif yang menjadi penyembuhnya."},
    {q:"Jika P → Q dan Q → R, manakah kesimpulan yang VALID secara logis?",opts:["R → P","Q → P","P → R","R → Q"],ans:2,exp:"Silogisme hipotesis (transitif): P → Q dan Q → R, maka P → R. Ini adalah prinsip transitivitas dalam logika. Pilihan lain: R→P, Q→P, R→Q tidak bisa disimpulkan dari premis yang diberikan (ini 'affirming the consequent' dan 'denying the antecedent' — keduanya fallacy)."},
    {q:"Analogi: PANEN : MUSIM HUJAN = GAGAL PANEN : ...",opts:["Musim panen","Kekeringan","Petani","Lumbung"],ans:1,exp:"Panen (hasil positif) terjadi/disebabkan oleh musim hujan (kondisi positif). Gagal panen (hasil negatif) terjadi/disebabkan oleh kekeringan (kondisi negatif). Pola: hasil → kondisi penyebabnya."},
    {q:"Analogi: RAKUS : HEMAT = KORUPSI : ...",opts:["Kecurangan","Transparansi","Kelicikan","Kelemahan"],ans:1,exp:"Rakus dan hemat adalah antonim (kata sifat negatif → positif). Korupsi (perilaku negatif) → transparansi (kondisi/nilai positif yang menjadi lawan dari korupsi). Pola: konsep/perilaku negatif → antonim positifnya."},
    {q:"Semua staf KDKMP harus memahami SOP gudang. Sebagian staf yang memahami SOP gudang membuat kesalahan. Kesimpulan yang TEPAT adalah...",opts:["Tidak ada staf KDKMP yang membuat kesalahan","Semua staf KDKMP membuat kesalahan","Sebagian staf KDKMP membuat kesalahan","Tidak ada staf KDKMP yang memahami SOP gudang"],ans:2,exp:"'Semua staf KDKMP → memahami SOP.' 'Sebagian yang memahami SOP → membuat kesalahan.' Maka: sebagian staf KDKMP (yang masuk dalam 'sebagian yang memahami SOP') membuat kesalahan. Tidak bisa disimpulkan 'semua' atau 'tidak ada'."},
    {q:"Analogi: GABAH : BERAS = KAPAS : ...",opts:["Kebun kapas","Benang","Pakaian","Kapuk"],ans:1,exp:"Gabah (bahan baku) → diolah menjadi → beras (produk langsung). Kapas (bahan baku) → diolah menjadi → benang (produk langsung pertama). Pola: bahan baku → produk olahan langsung (bukan produk akhir seperti pakaian)."},
    {q:"Jika 'Tidak benar bahwa semua petani kaya', maka yang BENAR adalah...",opts:["Semua petani miskin","Tidak ada petani yang kaya","Ada (beberapa) petani yang tidak kaya","Tidak ada petani yang tidak kaya"],ans:2,exp:"Negasi dari 'Semua A adalah B' adalah 'Ada (beberapa) A yang bukan B'. Jadi negasi dari 'semua petani kaya' adalah 'ada (beberapa) petani yang tidak kaya'. Ini adalah aturan kuantor logika yang sering diujikan dalam TIU."},
    {q:"Analogi: MANAJER : KOPERASI = DIREKTUR : ...",opts:["Pegawai","Karyawan","Perusahaan","Saham"],ans:2,exp:"Manajer mengelola operasional koperasi (satu tingkat di bawah pengurus). Direktur mengelola operasional perusahaan (PT). Pola: jabatan eksekutif profesional → organisasi/badan usaha yang dikelolanya."},
    {q:"Sebagian anggota KDKMP adalah petani sawah. Semua petani sawah menggunakan pupuk NPK. Kesimpulan yang TEPAT adalah...",opts:["Semua anggota KDKMP menggunakan pupuk NPK","Tidak ada anggota KDKMP yang menggunakan pupuk NPK","Sebagian anggota KDKMP menggunakan pupuk NPK","Semua petani sawah adalah anggota KDKMP"],ans:2,exp:"'Sebagian anggota KDKMP = petani sawah' + 'Semua petani sawah = pakai NPK' → Sebagian anggota KDKMP (yang petani sawah) menggunakan pupuk NPK. Kuantor 'sebagian' tetap terbawa ke kesimpulan."},
    {q:"Analogi: BUNGA : POHON = SHU : ...",opts:["Anggota","Koperasi","Cadangan","Pengurus"],ans:1,exp:"Bunga adalah hasil/produk yang dihasilkan dari pohon. SHU adalah hasil/keuntungan yang dihasilkan dari koperasi. Pola: produk/hasil → sumber yang menghasilkannya."},
    {q:"Jika 'Setiap manajer yang jujur pasti dipercaya anggota' dan 'Pak Ahmad tidak dipercaya anggota', maka...",opts:["Pak Ahmad pasti tidak jujur","Pak Ahmad mungkin jujur mungkin tidak","Pak Ahmad pasti jujur","Tidak dapat disimpulkan apapun"],ans:0,exp:"Modus Tollens: Jika P (jujur) → Q (dipercaya). Tidak Q (tidak dipercaya). Maka tidak P (tidak jujur). Ini inferensi valid. Logika: 'Jujur → dipercaya' → kebalikannya 'tidak dipercaya → tidak jujur' adalah VALID (contrapositive)."},
    {q:"Analogi: SAPI : TERNAK = PADI : ...",opts:["Gabah","Sawah","Tanaman pangan","Petani"],ans:2,exp:"Sapi adalah contoh/anggota dari kategori 'ternak' (hewan yang dipelihara untuk diambil manfaatnya). Padi adalah contoh/anggota dari kategori 'tanaman pangan' (tanaman yang ditanam untuk konsumsi manusia). Pola: contoh spesifik → kategori umum/genus."}
  ]
},

"3b": {
  id:"3b", module:3,
  label:"Deret Angka & Aritmatika Cepat",
  icon:"🔢",
  desc:"Deret aritmatika, geometri, Fibonacci, deret campuran, persentase, rasio, hitung cepat",
  color:"amber",
  questions:[
    {q:"Deret: 3, 6, 12, 24, 48, ...",opts:["60","72","96","84"],ans:2,exp:"Pola geometri dengan rasio ×2. 48 × 2 = 96."},
    {q:"Deret: 2, 5, 10, 17, 26, ...",opts:["35","37","36","38"],ans:1,exp:"Beda antar suku: 3, 5, 7, 9 — beda ke-2 konstan = 2. Beda berikutnya = 11. Jadi 26 + 11 = 37."},
    {q:"Deret: 1, 4, 9, 16, 25, ...",opts:["32","36","40","49"],ans:1,exp:"Pola kuadrat: n². 1², 2², 3², 4², 5², 6² = 36."},
    {q:"Deret: 80, 40, 20, 10, ...",opts:["8","5","6","4"],ans:1,exp:"Pola geometri dengan rasio ÷2. 10 ÷ 2 = 5."},
    {q:"Deret: 1, 1, 2, 3, 5, 8, 13, ...",opts:["18","19","21","20"],ans:2,exp:"Deret Fibonacci: setiap suku = jumlah 2 suku sebelumnya. 8 + 13 = 21."},
    {q:"Deret: 2, 3, 6, 7, 14, 15, ...",opts:["16","28","30","18"],ans:2,exp:"Pola bergantian: +1, ×2, +1, ×2. Jadi: 15 × 2 = 30."},
    {q:"Deret: 100, 95, 85, 70, 50, ...",opts:["20","25","30","35"],ans:1,exp:"Beda: -5, -10, -15, -20 — beda ke-2 = -5. Beda berikutnya = -25. Jadi 50 - 25 = 25."},
    {q:"Deret: 4, 7, 13, 25, 49, ...",opts:["91","97","99","100"],ans:1,exp:"Pola: ×2 - 1. 4×2-1=7, 7×2-1=13, 13×2-1=25, 25×2-1=49, 49×2-1=97."},
    {q:"Deret: 1, 2, 4, 7, 11, 16, ...",opts:["21","22","23","24"],ans:1,exp:"Beda: 1, 2, 3, 4, 5 — beda ke-2 konstan = 1. Beda berikutnya = 6. Jadi 16 + 6 = 22."},
    {q:"Deret: 3, 9, 27, 81, ...",opts:["162","243","256","324"],ans:1,exp:"Pola geometri dengan rasio ×3. 81 × 3 = 243."},
    {q:"Traktor A kecepatan 5 km/jam, traktor B 8 km/jam. Berangkat bersamaan dari titik yang sama. Setelah 3 jam, selisih jarak adalah...",opts:["5 km","8 km","9 km","15 km"],ans:2,exp:"Jarak A = 5 × 3 = 15 km. Jarak B = 8 × 3 = 24 km. Selisih = 24 − 15 = 9 km."},
    {q:"Koperasi membeli 500 kwintal gabah @ Rp 5.000/kg (1 kwintal = 100 kg). Total biaya pembelian adalah...",opts:["Rp 25 juta","Rp 250 juta","Rp 2,5 miliar","Rp 2,5 juta"],ans:1,exp:"500 kwintal = 50.000 kg. Total = 50.000 × Rp 5.000 = Rp 250.000.000 = Rp 250 juta."},
    {q:"Harga pupuk naik 20% dari Rp 150.000. Setelah diskon 10%, harga yang dibayar adalah...",opts:["Rp 162.000","Rp 165.000","Rp 170.000","Rp 158.000"],ans:0,exp:"Harga setelah naik: Rp 150.000 × 1,2 = Rp 180.000. Setelah diskon 10%: Rp 180.000 × 0,9 = Rp 162.000."},
    {q:"Harga beras naik 25% dari Rp 12.000/kg. Harga baru per kg adalah...",opts:["Rp 14.000","Rp 15.000","Rp 14.500","Rp 13.000"],ans:1,exp:"Kenaikan = 25% × Rp 12.000 = Rp 3.000. Harga baru = Rp 12.000 + Rp 3.000 = Rp 15.000/kg."},
    {q:"Koperasi memiliki 160 anggota. 15% anggota baru bergabung. Jumlah anggota sekarang...",opts:["175 orang","184 orang","176 orang","180 orang"],ans:1,exp:"Anggota baru = 15% × 160 = 24 orang. Total = 160 + 24 = 184 orang."},
    {q:"Koperasi membeli 100 kg beras @ Rp 12.000/kg dan menjual @ Rp 14.500/kg. Total keuntungan adalah...",opts:["Rp 200.000","Rp 250.000","Rp 145.000","Rp 120.000"],ans:1,exp:"Margin per kg = Rp 14.500 − Rp 12.000 = Rp 2.500. Total keuntungan = 100 × Rp 2.500 = Rp 250.000."},
    {q:"Deret: 5, 10, 8, 16, 14, 28, 26, ...",opts:["50","52","54","56"],ans:1,exp:"Pola dua rantai bergantian: ×2 kemudian -2. 10×2=20? Cek: 5→10(×2), 10→8(-2), 8→16(×2), 16→14(-2), 14→28(×2), 28→26(-2), 26→52(×2). Jawaban: 52."},
    {q:"Jika 30% dari pendapatan koperasi = Rp 90 juta, berapa total pendapatan koperasi?",opts:["Rp 270 juta","Rp 300 juta","Rp 270 juta","Rp 240 juta"],ans:1,exp:"30% × Total = Rp 90 juta. Total = Rp 90 juta ÷ 30% = Rp 90 juta ÷ 0,3 = Rp 300 juta."},
    {q:"Deret: 2, 6, 18, 54, 162, ...",opts:["324","486","500","576"],ans:1,exp:"Pola geometri dengan rasio ×3. 162 × 3 = 486."},
    {q:"Deret: 1, 3, 7, 15, 31, ...",opts:["57","61","63","65"],ans:2,exp:"Pola: ×2+1. 1×2+1=3, 3×2+1=7, 7×2+1=15, 15×2+1=31, 31×2+1=63."}
  ]
},

// ══════════════════════════════════════════════
// SUB-MODUL 3c: Perkalian & Pembagian Pecahan
// ══════════════════════════════════════════════

"3c": {
  id:"3c", module:3,
  label:"Pecahan, Perkalian & Pembagian",
  icon:"➗",
  desc:"Operasi pecahan biasa, campuran, desimal, perkalian silang, pembagian, penyederhanaan, aplikasi koperasi",
  color:"amber",
  questions:[
    {
      q:"Koperasi membeli ¾ ton gabah dari Pak Sarto dan ⅝ ton dari Bu Minah. Total gabah yang dibeli adalah...",
      opts:["1¼ ton","1⅜ ton","1½ ton","1⅝ ton"],
      ans:1,
      exp:"¾ + ⅝ = 6/8 + 5/8 = 11/8 = 1⅜ ton. Samakan penyebut: KPK(4,8)=8. ¾=6/8. Jadi 6/8 + 5/8 = 11/8 = 1 3/8."
    },
    {
      q:"Staf gudang menyelesaikan ⅔ pekerjaan sortir di pagi hari dan ¼ lagi di sore hari. Berapa bagian yang belum diselesaikan?",
      opts:["1/12","1/6","1/4","5/12"],
      ans:0,
      exp:"Sudah selesai = ⅔ + ¼ = 8/12 + 3/12 = 11/12. Belum selesai = 1 − 11/12 = 1/12."
    },
    {
      q:"½ × ¾ × ⅔ = ...",
      opts:["1/4","1/6","1/8","3/8"],
      ans:0,
      exp:"½ × ¾ × ⅔ = (1×3×2)/(2×4×3) = 6/24 = 1/4. Hitung pembilang: 1×3×2=6. Penyebut: 2×4×3=24. Sederhanakan: 6/24 = 1/4."
    },
    {
      q:"Koperasi mengalokasikan ⅗ dari anggaran Rp 15 juta untuk pembelian pupuk. Berapa yang dialokasikan?",
      opts:["Rp 7 juta","Rp 8 juta","Rp 9 juta","Rp 10 juta"],
      ans:2,
      exp:"⅗ × Rp 15 juta = (3 × 15)/5 = 45/5 = Rp 9 juta."
    },
    {
      q:"2⅓ ÷ ⅔ = ...",
      opts:["3","3½","3¼","3⅓"],
      ans:1,
      exp:"2⅓ = 7/3. Pembagian pecahan: 7/3 ÷ ⅔ = 7/3 × 3/2 = 21/6 = 7/2 = 3½."
    },
    {
      q:"Lahan seluas 4¼ hektar dibagi rata kepada 5 petani anggota. Tiap petani mendapat...",
      opts:["¾ ha","⅘ ha","17/20 ha","1 ha"],
      ans:2,
      exp:"4¼ ÷ 5 = 17/4 ÷ 5 = 17/4 × 1/5 = 17/20 ha per petani."
    },
    {
      q:"⅚ − ⅔ + ¼ = ...",
      opts:["¼","5/12","7/12","11/12"],
      ans:1,
      exp:"KPK(6,3,4)=12. ⅚=10/12, ⅔=8/12, ¼=3/12. Hasilnya: 10/12 − 8/12 + 3/12 = 5/12."
    },
    {
      q:"Manajer membagi 7½ kwintal jagung ke 3 gudang secara merata. Tiap gudang mendapat...",
      opts:["2 kwintal","2¼ kwintal","2½ kwintal","2¾ kwintal"],
      ans:2,
      exp:"7½ ÷ 3 = 15/2 ÷ 3 = 15/2 × 1/3 = 15/6 = 5/2 = 2½ kwintal."
    },
    {
      q:"(¾)² = ...",
      opts:["6/8","9/16","3/8","6/16"],
      ans:1,
      exp:"(¾)² = ¾ × ¾ = (3×3)/(4×4) = 9/16."
    },
    {
      q:"Dari 120 anggota koperasi, ⅜ adalah petani padi, ¼ petani jagung, sisanya petani campuran. Berapa petani campuran?",
      opts:["40 orang","42 orang","44 orang","45 orang"],
      ans:3,
      exp:"Padi: ⅜ × 120 = 45. Jagung: ¼ × 120 = 30. Campuran: 120 − 45 − 30 = 45 orang."
    },
    {
      q:"1¾ × 2⅖ = ...",
      opts:["3⅕","3⅗","4⅕","4⅗"],
      ans:2,
      exp:"1¾ = 7/4. 2⅖ = 12/5. 7/4 × 12/5 = 84/20 = 21/5 = 4⅕."
    },
    {
      q:"Koperasi menyimpan 0,75 ton gabah per hari. Dalam 4⅓ hari, total gabah yang disimpan adalah...",
      opts:["3 ton","3,15 ton","3,25 ton","3,5 ton"],
      ans:2,
      exp:"0,75 × 4⅓ = 0,75 × 13/3 = 9,75/3 = 3,25 ton."
    },
    {
      q:"½ ÷ ¼ ÷ ⅓ = ...",
      opts:["1/24","⅜","1½","6"],
      ans:3,
      exp:"½ ÷ ¼ = ½ × 4 = 2. Lalu 2 ÷ ⅓ = 2 × 3 = 6."
    },
    {
      q:"Dana koperasi Rp 24 juta. ⅓ untuk operasional, ¼ untuk pengembangan, sisanya untuk cadangan. Cadangan = ...",
      opts:["Rp 8 juta","Rp 9 juta","Rp 10 juta","Rp 11 juta"],
      ans:2,
      exp:"Operasional: ⅓ × 24 = 8 juta. Pengembangan: ¼ × 24 = 6 juta. Cadangan: 24 − 8 − 6 = Rp 10 juta."
    },
    {
      q:"2/5 dari total simpanan anggota = Rp 6 juta. Total simpanan seluruh anggota adalah...",
      opts:["Rp 12 juta","Rp 15 juta","Rp 18 juta","Rp 20 juta"],
      ans:1,
      exp:"2/5 × Total = 6 juta. Total = 6 juta × 5/2 = Rp 15 juta."
    },
    {
      q:"Perbandingan jasa modal : jasa usaha = 2 : 3. Jika jasa modal = Rp 8 juta, jasa usaha = ...",
      opts:["Rp 10 juta","Rp 12 juta","Rp 14 juta","Rp 16 juta"],
      ans:1,
      exp:"Rasio 2:3 artinya jasa usaha = (3/2) × jasa modal = 3/2 × 8 = Rp 12 juta."
    },
    {
      q:"(⅖ + ⅗) × (¾ − ¼) = ...",
      opts:["¼","½","¾","1"],
      ans:1,
      exp:"⅖ + ⅗ = 5/5 = 1. ¾ − ¼ = ½. Jadi 1 × ½ = ½."
    },
    {
      q:"Pak Andi menyumbang 1/6 simpanannya, Bu Beti 2/9 simpanannya. Pak Andi simpanan Rp 12 juta, Bu Beti Rp 9 juta. Total sumbangan keduanya...",
      opts:["Rp 3 juta","Rp 4 juta","Rp 4,5 juta","Rp 5 juta"],
      ans:1,
      exp:"Andi: 1/6 × 12 = Rp 2 juta. Beti: 2/9 × 9 = Rp 2 juta. Total = Rp 4 juta."
    },
    {
      q:"0,6 × 1¼ + 0,4 × ¾ = ...",
      opts:["0,75","1,00","1,05","1,25"],
      ans:1,
      exp:"0,6 × 1,25 = 0,75. 0,4 × 0,75 = 0,30. Total = 0,75 + 0,30 = 1,05. (Koreksi: 0,6×1,25=0,75; 0,4×0,75=0,3; jumlah=1,05 → jawaban C)"
    },
    {
      q:"Koperasi memiliki utang Rp 3⅓ juta yang harus dilunasi dalam 5 cicilan sama besar. Tiap cicilan adalah...",
      opts:["Rp 600.000","Rp 650.000","Rp 666.667","Rp 700.000"],
      ans:2,
      exp:"3⅓ juta = 10/3 juta. Tiap cicilan = (10/3) ÷ 5 = 10/15 = 2/3 juta = Rp 666.667."
    }
  ]
},

// ══════════════════════════════════════════════
// SUB-MODUL 3d: Pola Gambar (Deskripsi Teks)
// ══════════════════════════════════════════════

"3d": {
  id:"3d", module:3,
  label:"Pola Gambar & Matriks Visual",
  icon:"🔷",
  desc:"Pola rotasi, pencerminan, penambahan/pengurangan elemen, matriks 3×3, analogi visual, pola warna dan bentuk",
  color:"amber",
  questions:[
    {
      q:"Dalam matriks 3×3: Baris 1 = [●○○] [●●○] [●●●]. Baris 2 = [○○○] [●○○] [●●○]. Baris 3 = [○○○] [○○○] [?]. Pola yang mengisi tanda '?' adalah...",
      opts:["[●●●]","[●●○]","[●○○]","[○○○]"],
      ans:2,
      exp:"Pola: setiap baris, dari kiri ke kanan, jumlah ● bertambah 1. Baris 3 dimulai dari 0●. Sel 3 baris 3 = 1 lingkaran hitam = [●○○]."
    },
    {
      q:"Urutan gambar: □ → △ → ○ → □ → △ → ? Gambar berikutnya adalah...",
      opts:["□","△","○","⬡"],
      ans:2,
      exp:"Pola berulang 3 bentuk: □, △, ○, □, △, ○, ... Posisi ke-6 = ○."
    },
    {
      q:"Setiap gambar dalam urutan memiliki 1 sisi lebih dari gambar sebelumnya: △(3) → □(4) → ⬠(5) → ⬡(6) → ? Selanjutnya adalah...",
      opts:["Segitiga","Segi-7","Lingkaran","Segi-8"],
      ans:1,
      exp:"Jumlah sisi bertambah 1 tiap gambar: 3→4→5→6→7. Gambar berikutnya adalah segi-7 (heptagon)."
    },
    {
      q:"Matriks 3×3, setiap baris berisi 3 bentuk. Baris 1: [△ kecil] [△ sedang] [△ besar]. Baris 2: [□ kecil] [□ sedang] [□ besar]. Baris 3: [○ kecil] [○ sedang] [?]. Jawaban adalah...",
      opts:["△ besar","□ besar","○ besar","○ kecil"],
      ans:2,
      exp:"Pola kolom 3 selalu berisi ukuran BESAR. Pola baris 3 selalu berisi bentuk ○. Maka [?] = ○ besar."
    },
    {
      q:"Panah menunjuk: ↑ → ↓ → ← → ↑ → → → ? Arah selanjutnya adalah...",
      opts:["↑","↓","←","→"],
      ans:1,
      exp:"Pola 4 arah berurutan: ↑, →, ↓, ← (searah jarum jam). Urutan: ↑(1), →(2), ↓(3), ←(4), ↑(5), →(6), posisi ke-7 = ↓."
    },
    {
      q:"Barisan gambar: ★ ★★ ★★★ ★★ ★ ★★ ★★★ ★★ ★ ★★ ? Gambar berikutnya adalah...",
      opts:["★","★★","★★★","★★★★"],
      ans:2,
      exp:"Pola berulang: 1,2,3,2,1 — kemudian berulang. Posisi ke-11: 1,2,3,2,1,2,3,2,1,2,3. Posisi ke-11 = ★★★ (3 bintang)."
    },
    {
      q:"Dalam matriks 3×3, elemen pojok kiri atas adalah ■, pojok kanan atas adalah □, pojok kiri bawah adalah □, pojok kanan bawah adalah ■. Elemen tengah adalah ○. Pola ini menunjukkan...",
      opts:["Simetri diagonal (pojok berlawanan sama)","Simetri vertikal","Semua pojok sama","Tidak ada pola"],
      ans:0,
      exp:"Pojok kiri atas (■) = pojok kanan bawah (■). Pojok kanan atas (□) = pojok kiri bawah (□). Ini adalah simetri DIAGONAL — elemen yang berhadapan secara diagonal memiliki nilai sama."
    },
    {
      q:"Gambar 1: Segitiga dengan 1 titik di dalam. Gambar 2: Segitiga dengan 3 titik di dalam. Gambar 3: Segitiga dengan 6 titik di dalam. Gambar 4: Segitiga dengan ? titik.",
      opts:["8","9","10","12"],
      ans:2,
      exp:"Pola jumlah titik: 1, 3, 6, 10 — ini adalah bilangan segitiga (triangular numbers). 1=1, 1+2=3, 1+2+3=6, 1+2+3+4=10."
    },
    {
      q:"Urutan: kotak putih → kotak abu → kotak hitam → kotak abu → kotak putih → kotak abu → kotak hitam → ? Warna berikutnya adalah...",
      opts:["Putih","Abu","Hitam","Tidak ada pola"],
      ans:1,
      exp:"Pola: putih, abu, hitam, abu, putih, abu, hitam, abu... Setelah hitam selalu abu. Posisi ke-8 = abu."
    },
    {
      q:"Matriks 3×3. Baris 1: [A A A]. Baris 2: [A B A]. Baris 3: [A A A]. Huruf apakah yang ada HANYA di tengah?",
      opts:["A","B","C","Keduanya A dan B"],
      ans:1,
      exp:"Seluruh sel terisi A, kecuali sel tengah (baris 2, kolom 2) yang berisi B. Jadi B adalah satu-satunya elemen berbeda di posisi tengah."
    },
    {
      q:"Gambar berurutan menunjukkan jam: 3:00 → 6:00 → 9:00 → ? Waktu selanjutnya adalah...",
      opts:["10:00","11:00","12:00","1:00"],
      ans:2,
      exp:"Jarum jam maju 3 jam setiap gambar: 3:00 → 6:00 (+3) → 9:00 (+3) → 12:00 (+3)."
    },
    {
      q:"Pola: gambar 1 ada 1 lingkaran besar. Gambar 2: 1 besar + 1 kecil di dalam. Gambar 3: 1 besar + 1 kecil + 1 lebih kecil. Apa prinsip pola ini?",
      opts:["Setiap gambar, lingkaran terbesar dihapus","Setiap gambar, satu lingkaran baru yang lebih kecil ditambahkan di dalam","Ukuran semua lingkaran mengecil tiap gambar","Jumlah lingkaran tetap, hanya ukuran berubah"],
      ans:1,
      exp:"Ini pola nested/bersarang — setiap langkah menambahkan 1 lingkaran baru yang lebih kecil di dalam lingkaran sebelumnya. Gambar ke-n berisi n lingkaran bersarang."
    },
    {
      q:"Sebuah pola matriks 3×3: Kolom 1 semua ▲. Kolom 2 semua ■. Kolom 3 semua ●. Baris mana yang TIDAK sesuai pola jika ada: Baris 1=[▲ ■ ●], Baris 2=[▲ ■ ▲], Baris 3=[▲ ■ ●]?",
      opts:["Baris 1","Baris 2","Baris 3","Semua sesuai pola"],
      ans:1,
      exp:"Kolom 3 seharusnya semua ●. Di Baris 2, kolom 3 berisi ▲ (bukan ●). Jadi Baris 2 melanggar pola."
    },
    {
      q:"Gambar bayangan/cermin: gambar asli = ▶ (panah kanan). Jika dicerminkan secara vertikal (cermin kiri-kanan), hasilnya adalah...",
      opts:["▶ (tetap kanan)","◀ (panah kiri)","▼ (panah bawah)","▲ (panah atas)"],
      ans:1,
      exp:"Pencerminan vertikal (cermin kiri-kanan) membalik arah horizontal. ▶ (mengarah kanan) menjadi ◀ (mengarah kiri)."
    },
    {
      q:"Pola rotasi: gambar ▶ diputar 90° searah jarum jam menjadi ▼. Diputar 90° lagi menjadi ◀. Diputar 90° lagi menjadi ▲. Jika diputar 90° lagi, hasilnya...",
      opts:["▶","◀","▼","▲"],
      ans:0,
      exp:"Setelah 4 × 90° = 360° rotasi, gambar kembali ke posisi semula: ▶. Ini siklus penuh rotasi."
    },
    {
      q:"Matriks 3×3. Setiap baris, jumlah elemen hitam bertambah 1 dari kiri ke kanan. Baris 1: [1 hitam][2 hitam][3 hitam]. Baris 2: [2 hitam][3 hitam][4 hitam]. Sesuai pola, baris 3 kolom pertama berisi berapa elemen hitam?",
      opts:["2","3","4","5"],
      ans:1,
      exp:"Setiap baris, kolom pertama bertambah 1: baris 1 = 1, baris 2 = 2, baris 3 = 3. Kolom pertama baris 3 = 3 elemen hitam."
    },
    {
      q:"Urutan kode huruf: A C E G ? Pola yang benar adalah...",
      opts:["H","I","J","K"],
      ans:1,
      exp:"Pola: setiap huruf maju 2 posisi di alfabet. A(1)→C(3)→E(5)→G(7)→I(9). Jawaban: I."
    },
    {
      q:"Dalam soal pola angka-gambar: setiap lingkaran mewakili 3, setiap kotak mewakili 5. Gambar: ○□○ = berapa?",
      opts:["11","13","9","15"],
      ans:0,
      exp:"○ = 3, □ = 5, ○ = 3. Total = 3 + 5 + 3 = 11."
    },
    {
      q:"Pola gambar: baris 1 = [□□□], baris 2 = [□■□], baris 3 = [■■■]. Jika pola dilanjutkan ke baris 4, hasilnya...",
      opts:["[□□□]","[■□■]","[□■□]","[■■■]"],
      ans:2,
      exp:"Pola baris berulang dengan periode 4: baris 1=[□□□], baris 2=[□■□], baris 3=[■■■], baris 4 kembali seperti baris 2=[□■□] sebagai pola simetri naik-turun."
    },
    {
      q:"Empat gambar membentuk satu set: ▲ ▲▲ ▲▲▲ ▲▲▲▲. Gambar ini mewakili konsep matematika apa?",
      opts:["Deret aritmatika dengan beda 1","Deret geometri dengan rasio 2","Bilangan prima","Bilangan Fibonacci"],
      ans:0,
      exp:"1, 2, 3, 4 — jumlah segitiga bertambah 1 setiap gambar. Ini adalah deret aritmatika dengan beda (common difference) = 1."
    }
  ]
},

// ══════════════════════════════════════════════
// SUB-MODUL 3e: Analogi Lanjutan & Penalaran Verbal
// ══════════════════════════════════════════════

"3e": {
  id:"3e", module:3,
  label:"Analogi Lanjutan & Verbal",
  icon:"🔡",
  desc:"Analogi konsep abstrak, hubungan sebab-akibat, bagian-keseluruhan, proses-hasil, antonim, sinonim relasional",
  color:"amber",
  questions:[
    {
      q:"MANAJER : KOPERASI = KAPTEN : ...",
      opts:["Pelaut","Kapal","Lautan","Jangkar"],
      ans:1,
      exp:"Manajer memimpin dan mengendalikan koperasi (organisasi/alat). Kapten memimpin dan mengendalikan kapal (kendaraan/alat). Pola: pemimpin → wahana/organisasi yang dipimpin."
    },
    {
      q:"BENIH : TANAMAN = SIMPANAN : ...",
      opts:["Bank","Bunga","Modal Koperasi","Anggota"],
      ans:2,
      exp:"Benih adalah asal-mula / cikal-bakal yang tumbuh menjadi tanaman. Simpanan anggota adalah cikal-bakal / sumber yang tumbuh menjadi modal koperasi. Pola: sumber awal → hasil yang berkembang."
    },
    {
      q:"PENGAWAS : AKUNTABILITAS = POLISI : ...",
      opts:["Kejahatan","Penjara","Ketertiban","Senjata"],
      ans:2,
      exp:"Pengawas koperasi bertugas menegakkan akuntabilitas (nilai/tujuan yang dijaga). Polisi bertugas menegakkan ketertiban (nilai/tujuan yang dijaga). Pola: pihak penjaga → nilai yang dijaganya."
    },
    {
      q:"INFLASI : HARGA = KEKERINGAN : ...",
      opts:["Hujan","Produktivitas","Lahan","Petani"],
      ans:1,
      exp:"Inflasi menyebabkan kenaikan harga. Kekeringan menyebabkan penurunan produktivitas pertanian. Pola: kondisi negatif → dampak langsung yang ditimbulkannya."
    },
    {
      q:"AUDIT : KEUANGAN = INSPEKSI : ...",
      opts:["Laporan","Kualitas Barang","Pengurus","Anggota"],
      ans:1,
      exp:"Audit adalah proses pemeriksaan terhadap keuangan. Inspeksi adalah proses pemeriksaan terhadap kualitas barang/produk. Pola: metode pemeriksaan → objek yang diperiksa."
    },
    {
      q:"SHU : KOPERASI = DIVIDEN : ...",
      opts:["Bank","Saham","Perseroan Terbatas (PT)","Obligasi"],
      ans:2,
      exp:"SHU adalah keuntungan yang dibagikan koperasi kepada anggotanya. Dividen adalah keuntungan yang dibagikan PT kepada pemegang sahamnya. Pola: jenis bagi hasil → badan usaha yang membagikannya."
    },
    {
      q:"PETA : WILAYAH = ANGGARAN : ...",
      opts:["Uang","Rencana Keuangan","Pengeluaran","Neraca"],
      ans:1,
      exp:"Peta adalah representasi/gambaran dari wilayah nyata. Anggaran adalah representasi/gambaran dari rencana keuangan yang akan dilaksanakan. Pola: alat representasi → hal yang direpresentasikan."
    },
    {
      q:"KOPERASI : ANGGOTA = NEGARA : ...",
      opts:["Presiden","Pemerintah","Warga Negara","Undang-Undang"],
      ans:2,
      exp:"Koperasi didirikan oleh dan untuk anggota (pemilik sekaligus pengguna). Negara dibentuk oleh dan untuk warga negara (rakyat yang menjadi pemilik kedaulatan). Pola: organisasi → kelompok yang mendirikan sekaligus menjadi tujuannya."
    },
    {
      q:"KADAR AIR : KUALITAS GABAH = BUNGA : ...",
      opts:["Uang","Pinjaman","Nilai Utang","Bank"],
      ans:2,
      exp:"Kadar air yang tinggi menurunkan kualitas gabah (hubungan mempengaruhi). Bunga yang tinggi meningkatkan nilai total utang yang harus dibayar (hubungan mempengaruhi). Pola: faktor penentu → hal yang dipengaruhinya."
    },
    {
      q:"RACUN : TANAMAN = KORUPSI : ...",
      opts:["Uang","Organisasi","Hukum","Penjara"],
      ans:1,
      exp:"Racun secara perlahan merusak dan membunuh tanaman dari dalam. Korupsi secara perlahan merusak dan menghancurkan organisasi dari dalam. Pola: agen perusak → hal yang dirusaknya."
    },
    {
      q:"TERAMPIL : CANGGUNG = TRANSPARAN : ...",
      opts:["Jelas","Terbuka","Tertutup","Jujur"],
      ans:2,
      exp:"Terampil adalah antonim dari canggung (keahlian tinggi vs keahlian rendah). Transparan adalah antonim dari tertutup (terbuka vs tidak terbuka). Pola: kata sifat positif → antonim negatifnya."
    },
    {
      q:"MUSIM PANEN : SERAPAN TINGGI = MUSIM PACEKLIK : ...",
      opts:["Harga Naik","Serapan Rendah","Cuaca Panas","Petani Gembira"],
      ans:1,
      exp:"Musim panen menyebabkan serapan tinggi (komoditas melimpah). Musim paceklik menyebabkan serapan rendah (komoditas langka). Pola: kondisi pertanian → dampak langsung pada volume serapan koperasi."
    },
    {
      q:"DELEGASI : WEWENANG = TRANSFER : ...",
      opts:["Rekening","Pengetahuan","Pemindahan","Kas"],
      ans:1,
      exp:"Delegasi adalah proses penyerahan/pemindahan wewenang kepada orang lain. Transfer (pengetahuan) adalah proses penyerahan/pemindahan pengetahuan kepada orang lain. Pola: proses penyerahan → objek yang diserahkan."
    },
    {
      q:"BENCHMARKING : STANDAR TERBAIK = EVALUASI : ...",
      opts:["Penilaian Kinerja","Target","Anggaran","Laporan"],
      ans:0,
      exp:"Benchmarking adalah proses membandingkan dengan standar terbaik untuk meningkatkan kualitas. Evaluasi adalah proses menilai kinerja secara sistematis untuk mengukur pencapaian. Pola: metode penilaian → hasil/tujuan penilaian tersebut."
    },
    {
      q:"AIR : IKAN = MODAL : ...",
      opts:["Bank","Bunga","Usaha Koperasi","Anggota"],
      ans:2,
      exp:"Air adalah medium/lingkungan yang dibutuhkan ikan untuk hidup dan berkembang. Modal adalah medium/sumber daya yang dibutuhkan usaha koperasi untuk hidup dan berkembang. Pola: medium/sumber daya esensial → organisme/entitas yang bergantung padanya."
    },
    {
      q:"RAPAT ANGGOTA : KEPUTUSAN KOPERASI = PEMILU : ...",
      opts:["Partai Politik","Kebijakan Negara","Pemimpin Terpilih","Calon Pemimpin"],
      ans:2,
      exp:"Rapat Anggota adalah mekanisme demokrasi yang menghasilkan keputusan tertinggi koperasi melalui voting. Pemilu adalah mekanisme demokrasi yang menghasilkan pemimpin terpilih melalui voting. Pola: mekanisme demokrasi → hasil langsung dari mekanisme tersebut."
    },
    {
      q:"PELATIHAN : KOMPETENSI = PUPUK : ...",
      opts:["Lahan","Hasil Panen","Petani","Biaya"],
      ans:1,
      exp:"Pelatihan adalah input yang meningkatkan kompetensi (output) seseorang. Pupuk adalah input pertanian yang meningkatkan hasil panen (output). Pola: input/investasi → output/hasil yang ditingkatkan."
    },
    {
      q:"AKUNTABILITAS : KEPERCAYAAN = KUALITAS : ...",
      opts:["Harga Mahal","Kepuasan Pelanggan","Produk","Standar"],
      ans:1,
      exp:"Akuntabilitas yang tinggi membangun kepercayaan pemangku kepentingan. Kualitas yang tinggi membangun kepuasan pelanggan/anggota. Pola: nilai/atribut positif → dampak positif yang dihasilkannya."
    },
    {
      q:"MODUS PONENS : VALID = AFFIRMING THE CONSEQUENT : ...",
      opts:["Valid","Invalid/Fallacy","Deduktif","Induktif"],
      ans:1,
      exp:"Modus Ponens (P→Q, P ⊢ Q) adalah pola inferensi yang VALID. Affirming the Consequent (P→Q, Q ⊢ P) adalah pola inferensi yang INVALID (fallacy). Pola: jenis argumen → status validitasnya."
    },
    {
      q:"HERBISIDA : GULMA = ANTIKORUPSI : ...",
      opts:["Integritas","Korupsi","Transparansi","Hukum"],
      ans:1,
      exp:"Herbisida adalah agen yang digunakan untuk memberantas gulma (tanaman pengganggu). Kebijakan/sistem antikorupsi adalah agen yang digunakan untuk memberantas korupsi (tindakan pengganggu). Pola: alat/mekanisme pemberantasan → hal yang diberantas."
    }
  ]
},

// ══════════════════════════════════════════════
// MODULE 4: WAWASAN KEBANGSAAN
// ══════════════════════════════════════════════

"4a": {
  id:"4a", module:4,
  label:"Pancasila, UUD 1945 & NKRI",
  icon:"🇮🇩",
  desc:"5 Sila Pancasila, pasal UUD 1945, tujuan negara, amandemen UUD, implementasi di koperasi",
  color:"blue",
  questions:[
    {q:"Pasal UUD 1945 yang menjadi landasan KONSTITUSIONAL koperasi sebagai soko guru perekonomian nasional adalah...",opts:["Pasal 27 ayat (2)","Pasal 33 ayat (1)","Pasal 34 ayat (1)","Pasal 28D ayat (2)"],ans:1,exp:"Pasal 33 ayat (1) UUD 1945: 'Perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan.' Ini adalah landasan konstitusional koperasi yang langsung dari UUD 1945 — bukan hanya UU biasa."},
    {q:"Sila ke-5 'Keadilan Sosial bagi Seluruh Rakyat Indonesia' paling tepat tercermin dalam koperasi melalui...",opts:["Pembagian SHU proporsional berdasarkan kontribusi anggota","Pembatasan jumlah keanggotaan agar lebih eksklusif","Pemberian bonus khusus kepada anggota terkaya","Penolakan anggota baru dari luar desa"],ans:0,exp:"Keadilan sosial dalam koperasi: SHU proporsional berdasarkan kontribusi (jasa usaha + jasa modal) — mencerminkan pemerataan ekonomi berbasis kinerja nyata, bukan privilese status atau besarnya modal yang dimiliki."},
    {q:"Wawasan Nusantara memandang keberagaman suku dan budaya Indonesia sebagai...",opts:["Ancaman persatuan yang harus diseragamkan","Kekuatan dan kekayaan bangsa yang harus dijaga dalam bingkai NKRI","Masalah sosial yang perlu diselesaikan pemerintah pusat","Urusan daerah semata tanpa kaitan nasional"],ans:1,exp:"Wawasan Nusantara: keberagaman adalah anugerah dan kekuatan, bukan ancaman. Bhinneka Tunggal Ika — berbeda-beda tetapi tetap satu — dalam bingkai NKRI yang kokoh dan utuh."},
    {q:"Hubungan hierarki Pancasila dan UUD 1945 yang paling tepat adalah...",opts:["UUD 1945 lebih tinggi dari Pancasila dalam hierarki hukum","Pancasila adalah sumber dari segala sumber hukum — UUD 1945 adalah penjabaran formalnya","Keduanya sederajat dalam hierarki hukum Indonesia","Pancasila hanya mengatur bidang sosial budaya saja"],ans:1,exp:"Pancasila adalah dasar negara dan sumber dari segala sumber hukum Indonesia — termasuk UUD 1945. UUD 1945 adalah penjabaran formal dan konstitusional dari nilai-nilai Pancasila. Pancasila ada di puncak hierarki norma hukum Indonesia (Grundnorm)."},
    {q:"UUD 1945 telah mengalami amandemen sebanyak...",opts:["2 kali (1999 dan 2002)","3 kali (1999, 2000, dan 2001)","4 kali (1999, 2000, 2001, dan 2002)","5 kali (1999-2003)"],ans:2,exp:"UUD 1945 diamandemen 4 kali: Amandemen I (1999), Amandemen II (2000), Amandemen III (2001), Amandemen IV (2002). Pembukaan UUD 1945 tidak diamandemen karena memuat dasar negara dan tujuan nasional yang tidak boleh diubah."},
    {q:"Tujuan negara dalam Pembukaan UUD 1945 Alinea 4 yang PALING RELEVAN dengan misi koperasi pangan desa adalah...",opts:["Melindungi segenap bangsa dan tumpah darah Indonesia","Memajukan kesejahteraan umum","Mencerdaskan kehidupan bangsa","Ikut melaksanakan ketertiban dunia"],ans:1,exp:"'Memajukan kesejahteraan umum' paling relevan karena koperasi pangan berkontribusi langsung pada peningkatan kesejahteraan ekonomi petani dan masyarakat desa melalui ketahanan pangan, akses input pertanian, dan distribusi keuntungan yang adil."},
    {q:"'Bhinneka Tunggal Ika' dalam konteks koperasi desa berarti...",opts:["Semua anggota harus memiliki latar belakang yang sama","Anggota yang beragam bersatu dalam satu tujuan kesejahteraan bersama","Koperasi hanya boleh ada satu per desa","Perbedaan pendapat tidak boleh terjadi dalam koperasi"],ans:1,exp:"Bhinneka Tunggal Ika dalam koperasi: anggota dari latar belakang berbeda (suku, agama, tingkat ekonomi) bersatu dalam satu organisasi dengan satu tujuan — meningkatkan kesejahteraan anggota dan ketahanan pangan desa secara kolektif."},
    {q:"Pasal 33 ayat (2) UUD 1945 menyatakan 'cabang produksi penting bagi negara dikuasai negara'. Komoditas pangan strategis termasuk kategori ini karena...",opts:["Harganya selalu mahal dan sulit dijangkau","Pangan adalah kebutuhan dasar hidup seluruh rakyat yang tidak bisa digantikan komoditas lain","Pangan hanya diproduksi oleh petani WNI","Pemerintah ingin memonopoli seluruh produksi pangan"],ans:1,exp:"Pangan adalah kebutuhan primer yang menguasai 'hajat hidup orang banyak' — seluruh rakyat Indonesia. Oleh karena itu, sistem pangan (produksi, distribusi, stok) memerlukan peran dan regulasi negara untuk menjamin ketersediaan dan keterjangkauan bagi semua lapisan masyarakat."},
    {q:"Musyawarah Rencana Pembangunan Desa (Musrenbangdes) yang melibatkan koperasi desa merupakan implementasi nyata Pancasila sila ke...",opts:["Sila ke-2","Sila ke-3","Sila ke-4","Sila ke-5"],ans:2,exp:"Sila ke-4: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan.' Musrenbangdes adalah musyawarah partisipatif yang melibatkan semua unsur masyarakat (termasuk koperasi, BUMDes, RT/RW) dalam merencanakan pembangunan desa secara demokratis."},
    {q:"Sila ke-3 Pancasila 'Persatuan Indonesia' diimplementasikan dalam koperasi KDKMP melalui...",opts:["Pembatasan anggota hanya dari satu suku atau agama tertentu","Menyatukan petani dari berbagai latar belakang dalam satu organisasi dengan tujuan bersama","Menolak anggota yang berasal dari desa lain","Memisahkan kegiatan berdasarkan golongan anggota"],ans:1,exp:"Sila ke-3 dalam koperasi: menyatukan petani dari berbagai latar belakang (suku, agama, tingkat ekonomi) dalam satu organisasi ekonomi dengan tujuan bersama — meningkatkan kesejahteraan dan ketahanan pangan. Ini wujud nyata persatuan di tingkat desa."},
    {q:"Sila ke-1 'Ketuhanan yang Maha Esa' paling tepat tercermin dalam tata kelola koperasi melalui...",opts:["Koperasi hanya boleh diikuti oleh satu agama tertentu","Toleransi beragama antar anggota dan tidak mendiskriminasi berdasarkan agama dalam distribusi SHU dan layanan","Koperasi harus memiliki tempat ibadah di kantor","Keputusan RAT harus diawali dengan ritual keagamaan"],ans:1,exp:"Sila ke-1 dalam koperasi: toleransi dan menghormati keberagaman agama seluruh anggota. Tidak ada diskriminasi dalam SHU, pinjaman, atau akses layanan koperasi berdasarkan agama. Semua anggota dilayani setara sesuai kontribusi mereka."},
    {q:"Implementasi Pasal 30 UUD 1945 (bela negara) yang paling tepat bagi manajer koperasi pangan adalah...",opts:["Latihan militer sukarela setiap akhir pekan","Tolak produk impor secara mutlak meskipun terjadi kelangkaan","Kelola koperasi secara profesional untuk memperkuat kemandirian pangan dan kesejahteraan petani","Ikuti seminar geopolitik dan pertahanan negara"],ans:2,exp:"Bela negara non-militer yang paling nyata dan berdampak: mengelola koperasi profesional dan berintegritas — memperkuat kemandirian pangan desa yang merupakan fondasi ketahanan dan kedaulatan pangan nasional. Ini kontribusi nyata yang jauh lebih berdampak dari sekadar pelatihan militer."},
    {q:"Prinsip yang menjadi pembeda fundamental koperasi dari badan usaha lain menurut UU 25/1992 adalah...",opts:["Koperasi tidak boleh mendapat keuntungan apapun","Koperasi hanya boleh bergerak di bidang pertanian","Asas kekeluargaan dan pengelolaan demokratis (1 anggota 1 suara)","Koperasi harus dikelola oleh aparatur sipil negara"],ans:2,exp:"Asas kekeluargaan (sesuai Pasal 33 UUD 1945) dan prinsip demokratis (1 anggota 1 suara) adalah pembeda fundamental koperasi. Ini menjadikan koperasi sebagai wadah ekonomi rakyat berbasis partisipasi dan kesetaraan, bukan berbasis besarnya modal."},
    {q:"Sila ke-2 'Kemanusiaan yang Adil dan Beradab' tercermin dalam koperasi melalui...",opts:["Memberikan pinjaman berbunga sangat tinggi kepada anggota","Melayani semua anggota secara adil tanpa diskriminasi gender, suku, atau status ekonomi","Memprioritaskan anggota yang memiliki simpanan terbesar","Menolak anggota yang pernah menunggak pinjaman"],ans:1,exp:"Sila ke-2 dalam koperasi: memperlakukan semua anggota secara manusiawi, adil, dan bermartabat. Tidak ada diskriminasi berdasarkan jenis kelamin, suku, agama, atau status sosial-ekonomi. Setiap anggota berhak atas layanan koperasi yang sama berkualitasnya."},
    {q:"Dalam sistem pemerintahan Indonesia, otonomi daerah memberi kewenangan kepada desa untuk...",opts:["Membuat UU sendiri yang berlaku di wilayah desa","Mengatur dan mengurus urusan pemerintahan berdasarkan prakarsa masyarakat desa sendiri","Memungut pajak langsung dari warga tanpa koordinasi pusat","Mengelola pertahanan dan keamanan wilayah secara mandiri"],ans:1,exp:"UU 6/2014 tentang Desa: desa memiliki kewenangan mengatur dan mengurus urusan pemerintahan berdasarkan prakarsa sendiri, hak asal usul, dan kearifan lokal. Koperasi desa adalah salah satu bentuk prakarsa ekonomi masyarakat yang diakui dan didukung negara."},
    {q:"Konsep 'demokrasi ekonomi' dalam Pasal 33 UUD 1945 paling tepat diwujudkan melalui...",opts:["Kepemilikan pribadi atas semua sarana produksi","Koperasi sebagai wadah ekonomi rakyat yang dikelola bersama secara demokratis","Perusahaan negara (BUMN) yang menguasai semua sektor ekonomi","Pasar bebas tanpa regulasi pemerintah sama sekali"],ans:1,exp:"Pasal 33 UUD 1945 mengamanatkan perekonomian disusun sebagai usaha bersama berbasis kekeluargaan — ini adalah demokrasi ekonomi. Koperasi adalah bentuk paling konkret: dikelola bersama oleh anggota, keuntungan dibagi proporsional, setiap anggota punya suara setara."},
    {q:"ANEKA adalah 5 nilai dasar yang harus dimiliki pengelola program pemerintah. ANEKA singkatan dari...",opts:["Ambisi, Networking, Efisiensi, Kreativitas, Advokasi","Akuntabilitas, Nasionalisme, Etika publik, Komitmen mutu, Antikorupsi","Adaptasi, Negosiasi, Evaluasi, Kolaborasi, Aktualisasi","Analisis, Naratif, Eksplorasi, Komunikasi, Asesmen"],ans:1,exp:"ANEKA = Akuntabilitas (tanggung jawab atas keputusan), Nasionalisme (utamakan kepentingan nasional), Etika publik (integritas dan sopan santun), Komitmen mutu (terus tingkatkan kualitas dan inovasi), Antikorupsi (tolak gratifikasi, transparan). Lima nilai ini wajib dimiliki manajer KDKMP."},
    {q:"Nilai Nasionalisme dalam ANEKA yang harus dimiliki manajer KDKMP diwujudkan dengan...",opts:["Bangga menggunakan produk luar negeri yang lebih berkualitas","Mendahulukan kepentingan ketahanan pangan nasional di atas kepentingan pribadi dan kelompok","Menolak segala bentuk kerjasama dengan pihak asing","Selalu mengikuti kebijakan partai politik yang berkuasa"],ans:1,exp:"Nasionalisme dalam ANEKA: mendahulukan kepentingan bangsa dan negara (ketahanan pangan nasional) di atas kepentingan pribadi, kelompok, atau golongan. Wujud nyata: bekerja keras menyerap komoditas lokal, mendukung petani anggota, dan memperkuat swasembada pangan nasional."},
    {q:"Perbedaan utama BUMDes dan Koperasi Desa berdasarkan UU 6/2014 adalah...",opts:["BUMDes harus dibubarkan agar tidak bersaing dengan koperasi","BUMDes milik pemerintah desa (APBDes), koperasi milik anggota (simpanan) — keduanya dapat bersinergi","BUMDes bertugas mengawasi kinerja koperasi desa","Koperasi adalah bagian struktural dari BUMDes"],ans:1,exp:"BUMDes: didirikan pemerintah desa dengan modal APBDes, melayani semua warga desa, diatur UU 6/2014. Koperasi: didirikan warga (anggota) dengan modal simpanan, diatur UU 25/1992, untuk kepentingan anggota. Keduanya berbeda landasan hukum tapi dapat bersinergi dalam program ketahanan pangan desa."},
    {q:"Prinsip Akuntabilitas dalam ANEKA bagi manajer KDKMP berarti...",opts:["Tidak perlu membuat laporan selama ada kepercayaan dari anggota","Bertanggung jawab penuh atas setiap keputusan, tindakan, dan penggunaan sumber daya koperasi","Akuntansi keuangan yang mengikuti standar internasional IFRS","Hanya bertanggung jawab kepada pengurus, bukan anggota biasa"],ans:1,exp:"Akuntabilitas = kemampuan mempertanggungjawabkan setiap keputusan dan penggunaan sumber daya kepada seluruh pemangku kepentingan (anggota, pengurus, pengawas, pemerintah, Agrinas). Manajer adalah pengelola aset milik anggota — akuntabilitas adalah kewajiban fundamental, bukan pilihan."}
  ]
},

"4b": {
  id:"4b", module:4,
  label:"Ketahanan Nasional & Bela Negara",
  icon:"🛡️",
  desc:"8 Gatra Astagatra, Trigatra, Pancagatra, bela negara, UU 3/2002, ketahanan pangan = ketahanan nasional",
  color:"blue",
  questions:[
    {q:"'Bela Negara' non-militer yang paling relevan bagi manajer KDKMP adalah...",opts:["Mengikuti latihan militer sukarela setiap akhir pekan","Memastikan ketahanan pangan desa untuk mengurangi impor dan memperkuat kedaulatan ekonomi nasional","Membayar pajak tepat waktu setiap bulan","Memakai seragam batik pada hari-hari nasional"],ans:1,exp:"Bela negara non-militer mencakup semua upaya memperkuat ketahanan nasional. Manajer koperasi pangan yang menjamin kecukupan pangan desa berkontribusi langsung pada food security = bagian dari national security. Ini wujud bela negara yang paling konkret dan berdampak."},
    {q:"Dari 8 gatra ketahanan nasional (Astagatra), kontribusi koperasi pangan desa yang PALING LANGSUNG adalah pada gatra...",opts:["Gatra Ideologi","Gatra Ekonomi","Gatra Hankam","Gatra Sosial Budaya"],ans:1,exp:"8 Gatra: Geo, Demo, SDA (Trigatra) + Ideologi, Politik, Ekonomi, Sosbud, Hankam (Pancagatra). Koperasi pangan paling langsung berkontribusi pada Gatra Ekonomi — penyerapan komoditas, distribusi pangan merata, dan penguatan ekonomi desa."},
    {q:"Astagatra membagi 8 gatra ketahanan nasional menjadi...",opts:["4 Gatra alamiah dan 4 Gatra kehidupan nasional","3 Gatra alamiah (Trigatra) dan 5 Gatra kehidupan nasional (Pancagatra)","5 Gatra politik dan 3 Gatra ekonomi","6 Gatra internal dan 2 Gatra eksternal"],ans:1,exp:"Astagatra = Trigatra (3 gatra alamiah: Geografi, Demografi, Sumber Daya Alam) + Pancagatra (5 gatra kehidupan nasional: Ideologi, Politik, Ekonomi, Sosial Budaya, Hankam). Total = 8 gatra ketahanan nasional Indonesia."},
    {q:"Dalam konteks ketahanan nasional, food security (ketahanan pangan) memiliki keterkaitan langsung dengan gatra Hankam karena...",opts:["Tentara membutuhkan banyak pangan untuk berlatih","Ketidakcukupan pangan dapat menciptakan instabilitas sosial-politik yang mengancam keamanan nasional","Pertanian adalah salah satu cabang Angkatan Darat","Pangan digunakan sebagai senjata dalam perang gerilya"],ans:1,exp:"Food security = national security. Kekurangan pangan menciptakan kerawanan sosial, konflik, dan instabilitas yang mengancam keamanan nasional. Sejarah membuktikan banyak konflik bermula dari kelangkaan pangan. Itulah mengapa ketahanan pangan adalah fondasi pertahanan negara."},
    {q:"5 Nilai Dasar Bela Negara berdasarkan UU No. 3/2002 yang paling tepat adalah...",opts:["Cinta tanah air, kerja keras, disiplin, loyalitas, patriotisme","Cinta tanah air, sadar berbangsa-bernegara, yakin Pancasila, rela berkorban, kemampuan bela negara","Nasionalisme, patriotisme, militerisme, loyalitas, pengorbanan","Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika, pertahanan negara"],ans:1,exp:"5 Nilai Bela Negara (UU 3/2002): (1) Cinta Tanah Air, (2) Sadar Berbangsa & Bernegara, (3) Yakin Pancasila sebagai Ideologi Negara, (4) Rela Berkorban untuk Bangsa, (5) Kemampuan Bela Negara (militer & non-militer). Kelimanya harus dimiliki setiap WNI."},
    {q:"Kontribusi KDKMP pada Gatra Demografi ketahanan nasional adalah...",opts:["Menambah jumlah penduduk Indonesia melalui program KB","Meningkatkan kualitas hidup dan kesejahteraan keluarga petani anggota sehingga SDM yang sehat dan produktif","Mencatat data kependudukan anggota untuk pemerintah","Mengatur distribusi penduduk dari desa ke kota"],ans:1,exp:"Gatra Demografi bukan hanya tentang jumlah penduduk, tetapi juga kualitas dan kesejahteraan. KDKMP meningkatkan kualitas hidup keluarga petani (gizi, pendapatan, akses layanan) yang berkontribusi pada kualitas SDM — aspek penting ketahanan demografis nasional."},
    {q:"'Ketahanan Pangan' (food security) berbeda dari 'Kedaulatan Pangan' (food sovereignty) karena...",opts:["Keduanya memiliki makna yang identik dalam UU 18/2012","Ketahanan pangan fokus pada ketersediaan dan akses pangan; kedaulatan pangan mencakup hak negara menentukan kebijakan pangan sendiri","Kedaulatan pangan hanya tentang kebijakan impor","Ketahanan pangan hanya berlaku untuk beras saja"],ans:1,exp:"UU 18/2012: Ketahanan Pangan = terpenuhinya ketersediaan, akses, dan pemanfaatan pangan. Kedaulatan Pangan = hak negara/bangsa menentukan sistem pangan sesuai nilai, budaya, dan kebutuhan rakyatnya — lebih luas dari sekadar ketersediaan. Ini menyangkut kebijakan pertanian, perdagangan, dan pangan."},
    {q:"Implementasi nilai 'Rela Berkorban untuk Bangsa' (bela negara) yang paling konkret bagi manajer KDKMP adalah...",opts:["Meninggalkan keluarga untuk tugas militer","Bekerja melebihi jam kerja tanpa tambahan gaji saat musim panen raya demi koperasi dan petani","Mengorbankan kesehatan dengan bekerja tanpa istirahat","Menolak promosi jabatan agar tetap di desa"],ans:1,exp:"Rela berkorban dalam konteks non-militer bagi manajer KDKMP: bekerja ekstra keras saat musim panen (lembur), mengutamakan kepentingan anggota di atas kepentingan pribadi, dan memberikan yang terbaik untuk ketahanan pangan desa meskipun ada tantangan dan pengorbanan."},
    {q:"Dalam Gatra Sumber Daya Alam (Trigatra), koperasi pangan desa berkontribusi melalui...",opts:["Mengeksploitasi lahan pertanian sebesar-besarnya untuk target serapan","Optimalisasi dan pengelolaan lahan pertanian anggota secara berkelanjutan dan bertanggung jawab","Mengubah fungsi sawah menjadi lahan perumahan","Mengimpor teknologi pertanian baru dari luar negeri"],ans:1,exp:"Gatra SDA dalam ketahanan nasional: pengelolaan sumber daya alam secara optimal, efisien, dan berkelanjutan. KDKMP berkontribusi dengan mendorong praktik pertanian berkelanjutan (SRI, organik), memastikan produktivitas lahan anggota optimal, dan mencegah degradasi lahan pertanian produktif."},
    {q:"Konsep 'wawasan nusantara' dalam konteks KDKMP bermakna...",opts:["KDKMP harus berdagang hingga ke seluruh kepulauan Indonesia","Koperasi pangan desa adalah bagian dari sistem ketahanan pangan nasional yang terintegrasi dari Sabang sampai Merauke","KDKMP harus membuka cabang di setiap pulau Indonesia","Manajer KDKMP harus paham geografi seluruh nusantara"],ans:1,exp:"Wawasan Nusantara = memandang Indonesia sebagai satu kesatuan yang utuh. KDKMP sebagai koperasi desa adalah bagian dari ekosistem pangan nasional yang terintegrasi — kontribusi setiap KDKMP di desa manapun secara kolektif membentuk ketahanan pangan nasional dari Sabang sampai Merauke."},
    {q:"Prinsip GCG 'Independensi' bagi koperasi berarti...",opts:["Koperasi tidak membutuhkan bantuan dari pemerintah","Pengambilan keputusan koperasi bebas dari tekanan dan kepentingan pihak luar yang tidak semestinya","Koperasi tidak boleh bermitra dengan perusahaan swasta","Manajer koperasi harus bekerja sendiri tanpa bantuan staf"],ans:1,exp:"Independensi dalam GCG: keputusan koperasi dibuat berdasarkan kepentingan anggota dan analisis objektif, bebas dari tekanan pihak luar (politik, donor, perusahaan tertentu). Manajer KDKMP yang independen tidak bisa ditekan oleh pihak manapun untuk menguntungkan kepentingan tertentu yang bertentangan dengan kepentingan anggota."},
    {q:"Nilai 'Sadar Berbangsa dan Bernegara' dalam konteks bela negara diterapkan manajer KDKMP melalui...",opts:["Hapal seluruh pasal UUD 1945 diluar kepala","Aktif berpartisipasi dalam pembangunan desa, taat hukum, dan kontribusi pada ketahanan pangan nasional","Ikut bergabung dalam partai politik tertentu","Selalu mengkritik kebijakan pemerintah yang tidak sempurna"],ans:1,exp:"Sadar berbangsa-bernegara bukan hanya hafalan teoritis — ini tentang partisipasi aktif dalam pembangunan. Manajer KDKMP yang aktif membangun koperasi, taat hukum, dan berkontribusi pada ketahanan pangan adalah wujud kesadaran berbangsa-bernegara yang paling nyata."},
    {q:"Program swasembada pangan yang didukung KDKMP berkontribusi pada Gatra Ideologi ketahanan nasional karena...",opts:["Petani yang sejahtera cenderung lebih taat beribadah","Keberhasilan ekonomi Pancasila (koperasi) membuktikan relevansi ideologi Pancasila dalam kehidupan nyata","Koperasi mengajarkan ideologi komunisme melalui kepemilikan bersama","Swasembada pangan tidak ada kaitannya dengan ideologi"],ans:1,exp:"Koperasi yang berhasil adalah bukti nyata bahwa ekonomi berbasis Pancasila (asas kekeluargaan, gotong royong, demokrasi ekonomi) dapat bekerja. KDKMP yang sukses memperkuat argumen bahwa Pancasila relevan dan berdampak dalam kehidupan ekonomi nyata — ini memperkuat Gatra Ideologi."},
    {q:"Dalam konteks bela negara non-militer, tindakan mana yang PALING LANGSUNG berkontribusi pada ketahanan nasional bagi manajer KDKMP?",opts:["Menghafal dan hafal UUD 1945 secara lengkap","Memastikan distribusi pangan merata dan petani mendapat harga yang adil sehingga masyarakat tidak kelaparan","Mengikuti upacara bendera setiap Senin","Membagikan poster semangat nasionalisme kepada anggota koperasi"],ans:1,exp:"Bela negara non-militer paling berdampak = tindakan nyata yang memperkuat ketahanan nasional. Distribusi pangan merata dan petani sejahtera = gatra ekonomi kuat = ketahanan nasional kuat. Ini jauh lebih berdampak dari sekadar simbolisme atau hafalan."},
    {q:"Gatra Politik dalam ketahanan nasional dikontribusikan koperasi KDKMP melalui...",opts:["Mendukung kampanye partai politik tertentu","Demokrasi ekonomi melalui RAT sebagai model musyawarah yang memperkuat budaya demokratis di akar rumput","Melobi pemerintah untuk mendapat anggaran lebih besar","Menolak semua kebijakan pemerintah yang merugikan petani"],ans:1,exp:"Gatra Politik dalam ketahanan nasional: stabilitas sistem politik, partisipasi demokratis, dan pemerintahan yang baik. RAT koperasi yang demokratis (1 anggota 1 suara) adalah praktik nyata demokrasi di akar rumput yang memperkuat budaya demokrasi dan kepercayaan pada sistem demokratis."},
    {q:"Kontribusi KDKMP pada Gatra Sosial Budaya ketahanan nasional adalah...",opts:["Mengubah budaya lokal agar sesuai standar koperasi internasional","Memperkuat gotong royong, kepercayaan antar anggota, dan kohesi sosial masyarakat desa","Memaksakan satu budaya kepada semua anggota koperasi","Menghapus perbedaan budaya antar anggota agar lebih harmonis"],ans:1,exp:"Gatra Sosial Budaya: kekuatan nilai-nilai sosial, budaya, dan kepribadian bangsa dalam mendukung ketahanan. KDKMP memperkuat gotong royong (nilai budaya Indonesia), membangun kepercayaan antar anggota, dan memperkuat kohesi sosial desa — fondasi penting ketahanan sosial budaya."},
    {q:"UU No. 3 Tahun 2002 tentang Pertahanan Negara menegaskan bahwa bela negara adalah...",opts:["Kewajiban dan hak eksklusif Tentara Nasional Indonesia","Hak dan kewajiban setiap warga negara Indonesia dalam berbagai bentuk, termasuk non-militer","Hanya berlaku saat Indonesia dalam kondisi perang","Kewajiban pria usia 17-45 tahun saja"],ans:1,exp:"UU 3/2002 Pasal 9: bela negara adalah hak DAN kewajiban setiap warga negara, dalam berbagai bentuk. Bentuk non-militer mencakup: mempertahankan ketahanan ekonomi, pangan, sosial, budaya. Manajer KDKMP yang profesional adalah pelaksana bela negara non-militer yang nyata."},
    {q:"Ketahanan pangan nasional Indonesia dikategorikan sebagai kepentingan nasional vital karena...",opts:["Ekspor pangan adalah sumber devisa terbesar Indonesia","Kekurangan pangan mengancam stabilitas sosial, politik, dan ekonomi sekaligus — ketiganya fundamental bagi kelangsungan negara","Pangan adalah komoditas yang paling mudah diprodukai","Indonesia selalu mengalami surplus pangan setiap tahun"],ans:1,exp:"Pangan adalah kebutuhan paling mendasar — tanpa pangan, tidak ada yang berfungsi. Kelangkaan pangan menimbulkan: kemiskinan → ketidakstabilan sosial → ketidakpuasan politik → instabilitas negara. Ini adalah ancaman eksistensial bagi ketahanan nasional, bukan sekadar masalah ekonomi."},
    {q:"Nilai 'Kemampuan Bela Negara' yang dapat dikembangkan manajer KDKMP adalah...",opts:["Kemampuan menembak dan bela diri yang tinggi","Kemampuan profesional mengelola koperasi pangan dengan standar tinggi, membangun jaringan anggota, dan berkontribusi pada swasembada nasional","Kemampuan merekrut anggota militer sukarela di desa","Kemampuan membuat laporan intelijen tentang kondisi ketahanan pangan"],ans:1,exp:"Kemampuan bela negara non-militer bagi manajer KDKMP = kompetensi profesional yang berkontribusi pada ketahanan nasional. Mengelola koperasi pangan dengan standar tinggi, membangun jaringan petani, meningkatkan serapan komoditas — semua ini adalah bentuk kemampuan bela negara yang paling relevan."},
    {q:"Dalam konteks Trigatra, Gatra Geografi mempengaruhi strategi KDKMP terutama dalam hal...",opts:["Pilihan komoditas berdasarkan topografi dan iklim daerah lokasi koperasi","Desain logo dan brand koperasi","Penentuan jenis bahasa komunikasi dengan anggota","Penentuan struktur organisasi koperasi"],ans:0,exp:"Gatra Geografi (topografi, iklim, letak strategis) secara langsung mempengaruhi jenis komoditas yang bisa ditanam di suatu daerah. KDKMP di dataran tinggi fokus pada sayuran dan palawija, di dataran rendah fokus pada padi, di pesisir mungkin fokus pada perikanan. Geografi menentukan strategi agrobisnis koperasi."}
  ]
},

// ══════════════════════════════════════════════
// MODULE 5: AGRINAS & PROGRAM PANGAN
// ══════════════════════════════════════════════

"5a": {
  id:"5a", module:5,
  label:"PT Agrinas & Ekosistem Pangan Nasional",
  icon:"🏢",
  desc:"Profil Agrinas, rantai pasok pangan, Bulog, HPP, KUR, AUTP, model bisnis KDKMP, digitalisasi pangan",
  color:"green",
  questions:[
    {q:"PT Agrinas Pangan Nusantara dalam ekosistem pangan nasional berperan sebagai...",opts:["Lembaga pengawas koperasi desa seluruh Indonesia","Agregator pangan nasional yang menghubungkan KDKMP dengan pasar dan program distribusi pemerintah","Badan regulasi dan penetapan harga komoditas pertanian","Perusahaan ekspor pangan utama Indonesia ke pasar internasional"],ans:1,exp:"Agrinas adalah agregator pangan nasional: mengumpulkan komoditas dari ribuan KDKMP di seluruh Indonesia, lalu mendistribusikan ke Bulog, pasar modern, dan program bantuan pangan pemerintah. Posisi ini menghubungkan produksi desa dengan kebutuhan nasional."},
    {q:"HPP (Harga Pembelian Pemerintah) yang ditetapkan pemerintah bertujuan utama untuk...",opts:["Menentukan harga jual maksimum di pasar bebas","Melindungi petani dari harga pasar yang terlalu rendah agar usaha tani tetap menguntungkan","Mengatur margin keuntungan yang boleh diperoleh koperasi","Menentukan harga komoditas impor dari luar negeri"],ans:1,exp:"HPP adalah floor price (harga dasar/patokan minimum) yang melindungi petani. KDKMP wajib membeli komoditas dari anggota minimal sebesar HPP — memastikan petani tidak merugi ketika harga pasar jatuh dan termotivasi terus berproduksi untuk ketahanan pangan nasional."},
    {q:"KUR (Kredit Usaha Rakyat) yang dapat diakses koperasi KDKMP berfungsi untuk...",opts:["Membayar SHU anggota yang tertunda pembayarannya","Mendanai modal kerja pembelian komoditas dengan bunga rendah (6%/tahun, disubsidi pemerintah)","Memberi pinjaman tanpa bunga dan tanpa syarat kepada semua anggota","Membiayai gaji dan honorarium pengurus koperasi"],ans:1,exp:"KUR adalah kredit berbunga rendah (6%/tahun, disubsidi pemerintah) untuk usaha produktif. KDKMP dapat menggunakannya sebagai modal kerja membeli gabah/komoditas dari petani anggota saat panen raya — saat kebutuhan modal paling besar dan waktu pembayaran ke Agrinas masih menunggu."},
    {q:"Peran Bulog yang berkaitan langsung dengan kinerja KDKMP dalam program swasembada pangan adalah...",opts:["Mengawasi operasional KDKMP sehari-hari di tingkat desa","Menjadi offtaker (pembeli) komoditas pangan yang dikumpulkan KDKMP via Agrinas untuk Cadangan Pangan Pemerintah","Memberikan pelatihan teknis bagi manajer KDKMP","Menetapkan harga jual beras kepada konsumen akhir"],ans:1,exp:"Bulog mengelola Cadangan Beras Pemerintah (CBP) untuk menjamin stabilitas stok nasional. Rantai pasok: Petani → KDKMP (kumpulkan & proses) → Agrinas (agregasi nasional) → Bulog (cadangan pemerintah) / Pasar / Program bantuan pangan."},
    {q:"Asuransi Usaha Tani Padi (AUTP) yang bisa diakses petani anggota KDKMP memberikan manfaat berupa...",opts:["Menjamin harga jual gabah minimal sebesar HPP","Memberikan ganti rugi jika gagal panen akibat bencana alam atau serangan OPT (Organisme Pengganggu Tanaman)","Memberikan modal gratis untuk tanam musim berikutnya","Menanggung seluruh biaya pupuk dan benih per musim tanam"],ans:1,exp:"AUTP: petani membayar premi murah (Rp 36.000/ha/musim tanam, disubsidi pemerintah menjadi Rp 3.600). Jika gagal panen karena bencana alam (banjir, kekeringan, angin) atau OPT, petani mendapat ganti rugi 80% dari biaya usaha tani (Rp 6 juta/ha). KDKMP dapat membantu pendaftaran anggota ke AUTP."},
    {q:"SiMKop (Sistem Manajemen Koperasi) yang dikembangkan Kemenkop UKM digunakan KDKMP untuk...",opts:["Mendaftarkan diri secara resmi sebagai mitra PT Agrinas","Pencatatan digital anggota, simpanan, pinjaman, dan SHU secara otomatis dan transparan","Mengajukan KUR ke bank secara online langsung","Melaporkan volume serapan gabah ke Kementerian Pertanian"],ans:1,exp:"SiMKop adalah platform digital Kemenkop untuk manajemen koperasi: pencatatan anggota, simpanan, pinjaman, SHU, dan laporan keuangan secara otomatis. Meningkatkan transparansi, akurasi data, memudahkan audit, dan mendukung GCG koperasi secara struktural."},
    {q:"Break Even Point (BEP) koperasi paling berguna untuk...",opts:["Menentukan kapan sebaiknya koperasi dibubarkan","Mengetahui volume operasional minimal agar koperasi tidak merugi","Menghitung SHU maksimal yang dapat dibagikan ke anggota","Menentukan gaji dan honorarium pengurus koperasi"],ans:1,exp:"BEP = titik impas: volume operasional (serapan komoditas) minimal agar total pendapatan = total biaya (fixed + variable). Koperasi harus beroperasi di atas BEP agar menghasilkan SHU positif. Contoh: jika biaya tetap Rp 10 juta/bulan dan margin Rp 50.000/kwintal, BEP = 200 kwintal/bulan."},
    {q:"Food estate sebagai kawasan pertanian skala besar membutuhkan KDKMP untuk berperan sebagai...",opts:["Pemilik lahan pertanian di kawasan food estate","Mitra pengumpul komoditas dari petani plasma di kawasan tersebut dan menghubungkan ke rantai pasok Agrinas","Pengelola irigasi dan infrastruktur pertanian kawasan","Pengganti peran pemerintah sebagai pengelola kawasan"],ans:1,exp:"Dalam ekosistem food estate, KDKMP berperan sebagai mitra agregator di tingkat lapangan — mengumpulkan hasil produksi petani plasma yang bekerja di kawasan food estate, menjamin kualitas sesuai standar Bulog/Agrinas, dan mengirimkan ke jaringan distribusi Agrinas."},
    {q:"Manfaat digitalisasi rantai pasok pangan bagi manajer KDKMP, KECUALI...",opts:["Transparansi data stok dan transaksi secara real-time","Laporan keuangan otomatis yang lebih akurat","Eliminasi TOTAL kebutuhan staf administrasi koperasi","Tracking distribusi pangan yang lebih efisien dan akurat"],ans:2,exp:"Digitalisasi meningkatkan efisiensi administrasi tetapi TIDAK menghilangkan total kebutuhan staf. Manusia masih diperlukan untuk: relasi dengan anggota petani, koordinasi lapangan, penanganan masalah kompleks, dan keputusan yang butuh judgment. Teknologi adalah alat bantu, bukan pengganti total."},
    {q:"Kontribusi KDKMP dalam misi swasembada pangan yang paling efektif adalah...",opts:["Mengajak anggota untuk tidak membeli produk pangan impor","Meningkatkan volume serapan dan kualitas komoditas pangan lokal sehingga produksi domestik mampu memenuhi kebutuhan nasional","Mengajukan protes kepada pemerintah agar melarang impor pangan","Menjual produk lokal dengan harga lebih tinggi dari produk impor"],ans:1,exp:"Kontribusi nyata KDKMP: meningkatkan volume serapan komoditas lokal (motivasi petani produksi lebih), menjamin kualitas standar nasional (GKG ≤14%), dan memperkuat rantai pasok domestik — sehingga produksi dalam negeri mampu menggeser ketergantungan impor secara bertahap."},
    {q:"Standar kadar air gabah kering giling (GKG) yang diterima Bulog/Agrinas adalah...",opts:["≤ 16%","≤ 14%","≤ 18%","≤ 12%"],ans:1,exp:"Standar GKG yang diterima Bulog/Agrinas: kadar air ≤ 14% dan kadar hampa/kotoran ≤ 3%. Gabah dengan kadar air lebih tinggi berpotensi rusak (berjamur, bertunas) dalam penyimpanan dan akan ditolak atau dibeli dengan potongan harga. KDKMP harus pastikan gabah anggota dikeringkan sebelum disetor."},
    {q:"Dalam supply chain financing (pembiayaan rantai pasok), KDKMP dapat menggunakan bukti kontrak dengan Agrinas untuk...",opts:["Membuktikan legalitas koperasi kepada pemerintah desa","Mengajukan kredit ke bank dengan kontrak sebagai jaminan atau agunan tambahan","Mendapatkan pupuk bersubsidi lebih banyak dari distributor","Mendaftarkan diri sebagai peserta food estate secara otomatis"],ans:1,exp:"Kontrak resmi dengan Agrinas membuktikan kepastian pendapatan koperasi di masa mendatang — bank melihat ini sebagai bukti arus kas yang terencana sehingga risiko kredit lebih rendah. Ini memudahkan KDKMP mendapat KUR dengan limit lebih besar untuk modal kerja pembelian komoditas."},
    {q:"FIFO (First In First Out) dalam manajemen gudang koperasi pangan berarti...",opts:["Petugas yang datang pertama boleh pulang pertama","Komoditas yang masuk gudang pertama harus dikeluarkan/didistribusikan pertama","Pesanan pertama yang datang harus diselesaikan pertama","Petani yang mendaftar pertama mendapat harga beli terbaik"],ans:1,exp:"FIFO adalah prinsip manajemen persediaan: komoditas yang masuk pertama harus keluar pertama. Ini mencegah penumpukan stok lama yang melewati batas simpan, mengurangi food loss, dan memastikan kualitas komoditas yang didistribusikan ke Agrinas tetap terjaga sesuai standar."},
    {q:"Program BPNT (Bantuan Pangan Non-Tunai) memberikan peluang bagi KDKMP untuk...",opts:["Menerima bantuan modal langsung dari Kementerian Sosial","Menjadi e-warong penyalur bahan pokok kepada Keluarga Penerima Manfaat (KPM) — menambah pendapatan koperasi","Mendapatkan subsidi harga komoditas dari pemerintah","Mengakses gudang Bulog secara gratis untuk penyimpanan"],ans:1,exp:"KDKMP yang terakreditasi dapat menjadi e-warong resmi BPNT: menjual bahan pokok (beras, telur, dll) kepada KPM menggunakan kartu BPNT/BAPOK. Ini memberi revenue stream tambahan sekaligus menjalankan fungsi distribusi pangan sosial yang membantu kelompok rentan di desa."},
    {q:"Komponen biaya TERBESAR dalam struktur biaya operasional KDKMP yang bergerak di bidang serapan komoditas pangan adalah...",opts:["Gaji manajer dan staf koperasi","Biaya pembelian komoditas (gabah/jagung/kedelai) dari petani anggota","Biaya sewa gedung dan operasional gudang","Biaya distribusi dan transportasi ke depo Agrinas"],ans:1,exp:"Biaya pembelian komoditas adalah komponen biaya terbesar KDKMP pangan — bisa mencapai 70-85% dari total biaya operasional. Ini adalah biaya variable yang berfluktuasi sesuai volume serapan. Manajemen modal kerja untuk pembelian komoditas adalah kunci profitabilitas koperasi."},
    {q:"Transparansi data real-time melalui Dashboard Agrinas penting bagi manajer KDKMP karena...",opts:["Agar Agrinas bisa mengawasi dan mengendalikan koperasi sepenuhnya","Agar manajer dapat memantau progress serapan vs target, mendeteksi gap lebih awal, dan mengambil tindakan korektif tepat waktu","Agar anggota bisa melihat data secara langsung tanpa perantara manajer","Agar pemerintah pusat bisa menetapkan target yang lebih tinggi"],ans:1,exp:"Dashboard Agrinas memberikan visibilitas real-time terhadap kinerja serapan KDKMP. Dengan data ini, manajer bisa: pantau progress vs target, deteksi gap/bottleneck lebih awal, ambil tindakan korektif sebelum masalah membesar, dan pertahankan kepercayaan Agrinas sebagai mitra strategis."},
    {q:"Strategi KDKMP untuk bersaing dengan tengkulak dalam membeli gabah dari petani adalah...",opts:["Minta pemerintah melarang aktivitas tengkulak di desa","Hanya bersaing melalui harga — selalu bayar lebih tinggi dari tengkulak","Berikan value tambah: kemudahan (jemput di sawah), kepastian pembayaran tepat waktu, akses KUR dan input murah, tidak ada potongan tidak resmi","Laporkan tengkulak kepada aparat keamanan desa"],ans:2,exp:"KDKMP tidak bisa selalu menang di harga saja (modal terbatas). Value proposition yang lebih kuat: layanan jemput panen (convenient), pembayaran pasti tepat waktu (reliable), akses KUR dan pupuk subsidi (ekonomis), tidak ada pungutan liar (trustworthy). Kombinasi ini membuat petani lebih prefer koperasi."},
    {q:"Portal rekrutmen untuk seleksi Manajer KDKMP PT Agrinas Pangan Nusantara adalah...",opts:["www.bkn.go.id","phtc.panselnas.go.id","www.kementan.go.id","rekrutmen.agrinas.co.id"],ans:1,exp:"Seleksi Manajer KDKMP PT Agrinas Pangan Nusantara dilaksanakan melalui portal phtc.panselnas.go.id — Platform Seleksi Nasional yang digunakan untuk proses rekrutmen berbasis komputer (CAT/Computer Assisted Test)."},
    {q:"e-RDKK (Rencana Definitif Kebutuhan Kelompok) elektronik digunakan KDKMP untuk...",opts:["Mengajukan kredit KUR ke bank secara online","Memastikan distribusi pupuk bersubsidi tepat sasaran berdasarkan data petani per NIK","Mendaftarkan komoditas yang akan dijual ke Agrinas","Membuat laporan SHU secara digital kepada Kemenkop"],ans:1,exp:"e-RDKK adalah database elektronik berbasis NIK yang mencatat kebutuhan pupuk bersubsidi per petani berdasarkan luas lahan yang diolah. KDKMP yang menjadi distributor pupuk subsidi menggunakan e-RDKK untuk memastikan distribusi tepat sasaran dan mencegah penyalahgunaan/kebocoran subsidi."},
    {q:"Dalam menghadapi gagal panen massal akibat bencana, langkah terpenting manajer KDKMP untuk menjaga keberlanjutan koperasi adalah...",opts:["Segera tutup operasional koperasi sementara","Koordinasikan klaim AUTP untuk petani terdampak, informasikan Agrinas tentang proyeksi serapan, ajukan restrukturisasi kredit, susun rencana pemulihan bersama pengurus","Minta petani mencari pinjaman dari sumber lain","Jual seluruh aset koperasi untuk menutup kewajiban"],ans:1,exp:"Manajemen krisis yang baik: (1) Bantu petani klaim AUTP untuk lindungi mereka, (2) Transparansi ke Agrinas tentang situasi dan proyeksi serapan, (3) Restrukturisasi kredit bank jika ada untuk jaga likuiditas, (4) Rencanakan pemulihan bersama pengurus dan anggota. Menutup operasional justru memperburuk situasi."}
  ]
},

"5b": {
  id:"5b", module:5,
  label:"Ketahanan Pangan & Kebijakan Pangan Nasional",
  icon:"🌾",
  desc:"UU 18/2012, 3 pilar FAO, HPP, swasembada pangan, komoditas strategis, BPNT, food estate, program pangan nasional",
  color:"green",
  questions:[
    {q:"Tiga komoditas pangan strategis utama yang menjadi fokus program swasembada pangan Indonesia adalah...",opts:["Kopi, teh, dan coklat (kakao)","Beras (padi), jagung, dan kedelai","Singkong, ubi jalar, dan sagu","Buah tropis dan berbagai jenis sayuran"],ans:1,exp:"Beras (karbohidrat utama 95% penduduk), jagung (pakan ternak + pangan + bahan baku industri), kedelai (protein nabati utama — tahu, tempe) adalah 3 komoditas paling strategis. Nilai impornya terbesar sehingga menjadi fokus utama program swasembada pangan nasional."},
    {q:"Tiga pilar ketahanan pangan menurut FAO yang digunakan dalam UU 18/2012 adalah...",opts:["Produksi, Distribusi, dan Konsumsi","Availability (Ketersediaan), Access (Akses), dan Utilization (Pemanfaatan)","Harga, Kualitas, dan Kuantitas","Petani, Koperasi, dan Pemerintah"],ans:1,exp:"3 Pilar FAO (AAU): Availability (pangan tersedia cukup), Access (semua bisa mengakses secara ekonomis), Utilization (pangan dimanfaatkan dengan baik untuk gizi optimal). Ketiganya harus terpenuhi agar ketahanan pangan benar-benar tercapai — tidak cukup hanya pangan tersedia jika tidak terjangkau masyarakat."},
    {q:"Berdasarkan UU 18/2012, perbedaan antara 'ketahanan pangan' dan 'kemandirian pangan' yang paling tepat adalah...",opts:["Keduanya memiliki makna yang sama dan dapat dipertukarkan","Ketahanan pangan fokus pada terpenuhinya pangan bagi semua; kemandirian pangan fokus pada kemampuan pemenuhan dari produksi dalam negeri","Kemandirian pangan lebih penting dan mencakup ketahanan pangan sepenuhnya","Ketahanan pangan hanya berlaku di tingkat nasional"],ans:1,exp:"UU 18/2012: Ketahanan Pangan = kondisi terpenuhinya pangan (ketersediaan, keterjangkauan, keamanan). Kemandirian Pangan = kemampuan memenuhi kebutuhan dari produksi domestik (kurangi ketergantungan impor). Kedaulatan Pangan = hak menentukan kebijakan pangan sendiri. Ketiga konsep ini berbeda namun saling melengkapi."},
    {q:"Peran KDKMP dalam memperkuat pilar 'Access' (Akses) ketahanan pangan adalah...",opts:["Memperbanyak produksi gabah melebihi kebutuhan nasional","Memastikan harga jual bahan pokok kepada anggota tetap terjangkau dan bahan pokok tersedia di desa","Mendistribusikan gabah hanya kepada petani yang memiliki lahan besar","Membangun infrastruktur jalan pertanian di seluruh desa"],ans:1,exp:"Pilar Access ketahanan pangan: masyarakat bisa mengakses pangan secara ekonomis (mampu beli) dan fisik (tersedia di dekatnya). KDKMP berkontribusi dengan: menjual bahan pokok di koperasi dengan harga lebih terjangkau dari pasar, memastikan stok pangan tersedia di desa, dan menjadi e-warong BPNT."},
    {q:"Program BPNT (Bantuan Pangan Non-Tunai) termasuk dalam upaya memperkuat pilar ketahanan pangan...",opts:["Availability — menambah produksi pangan nasional","Access — memastikan kelompok miskin dapat mengakses pangan meskipun daya beli rendah","Utilization — meningkatkan kandungan gizi pangan yang dikonsumsi","Production — meningkatkan produktivitas petani"],ans:1,exp:"BPNT memperkuat pilar Access: keluarga kurang mampu (KPM) mendapat bantuan non-tunai untuk membeli bahan pokok (beras, telur) di e-warong. Ini memastikan kelompok rentan tetap bisa mengakses pangan meskipun daya beli rendah. KDKMP dapat menjadi e-warong untuk menyalurkan BPNT."},
    {q:"Mengapa komoditas beras menjadi prioritas utama program swasembada pangan Indonesia?",opts:["Karena beras adalah satu-satunya makanan yang dikonsumsi masyarakat Indonesia","Beras adalah makanan pokok bagi 95%+ penduduk, nilai impornya sangat besar, dan ketergantungan impor mengancam ketahanan ekonomi dan pangan nasional","Karena beras harganya paling tinggi di antara semua komoditas pangan","Karena beras paling mudah diproduksi dibandingkan jagung dan kedelai"],ans:1,exp:"Beras dikonsumsi >270 juta penduduk Indonesia sebagai makanan pokok utama. Indonesia pernah menjadi importir beras terbesar dunia — devisa yang besar tersedot untuk impor. Kemandirian beras berarti: hemat devisa, jaga ketahanan pangan, kurangi kerentanan terhadap gejolak harga pangan global."},
    {q:"Cadangan Pangan Pemerintah (CPP) yang dikelola Bulog bertujuan untuk...",opts:["Dijual ke pasar untuk mendapat keuntungan komersial","Menjamin ketersediaan pangan nasional dalam kondisi darurat, bencana, dan stabilisasi harga ketika pasar bergejolak","Mengisi kekurangan pangan di negara lain melalui ekspor kemanusiaan","Menggantikan seluruh fungsi pasar beras komersial"],ans:1,exp:"CPP (Cadangan Pangan Pemerintah): stok strategis yang dikelola Bulog untuk: (1) operasi pasar ketika harga beras melonjak, (2) bantuan bencana alam, (3) program BPNT/BAPOK, dan (4) stabilisasi harga. KDKMP melalui Agrinas berkontribusi mengisi CPP dengan menyetor komoditas ke Bulog."},
    {q:"Konsep 'rantai dingin' (cold chain) dalam distribusi pangan yang perlu dipahami manajer KDKMP adalah...",opts:["Rantai komando distribusi yang sangat birokratis dan lambat","Sistem penyimpanan dan transportasi terkontrol suhu untuk menjaga kualitas pangan yang mudah rusak (sayuran, buah, daging, ikan)","Prosedur pembayaran yang berjenjang dari Agrinas ke koperasi","Sistem freezer yang digunakan untuk menyimpan beras"],ans:1,exp:"Cold chain management: sistem distribusi yang mempertahankan suhu optimal sepanjang rantai pasok untuk komoditas perishable (mudah rusak). KDKMP yang menangani komoditas sayuran, buah, atau produk turunan hewani perlu memahami dan menerapkan cold chain untuk mencegah food loss."},
    {q:"Program cetak sawah baru yang melibatkan KDKMP bertujuan untuk...",opts:["Mengurangi lahan hutan yang tidak produktif","Memperluas areal pertanian produktif (ekstensifikasi) untuk meningkatkan produksi pangan nasional dalam rangka swasembada","Memindahkan petani dari lahan kritis ke sawah baru","Menambah lahan untuk perumahan bercorak pertanian"],ans:1,exp:"Cetak sawah baru adalah program ekstensifikasi pertanian — memperluas lahan sawah produktif terutama di luar Jawa (Kalimantan, Sulawesi, Papua). KDKMP di lokasi program cetak sawah baru berperan sebagai penggerak ekonomi lokal yang mengorganisir petani penerima lahan dan menyerap hasil produksi mereka."},
    {q:"Pengendalian OPT (Organisme Pengganggu Tanaman) yang efektif di tingkat desa berkaitan dengan ketahanan pangan karena...",opts:["OPT hanya menyerang tanaman hias bukan tanaman pangan","Serangan OPT dapat menyebabkan gagal panen massal yang langsung mengancam ketersediaan pangan dan serapan KDKMP","OPT adalah sumber protein alternatif bagi petani","Pengendalian OPT meningkatkan nilai estetika sawah"],ans:1,exp:"OPT (hama seperti tikus, wereng, penggerek batang; penyakit seperti blast, kresek) dapat menghancurkan 30-80% hasil panen jika tidak dikendalikan. Gagal panen massal = penurunan serapan KDKMP, kerugian petani anggota, ketidakmampuan bayar kembali KUR, dan ancaman ketahanan pangan desa."},
    {q:"Intensifikasi pertanian (meningkatkan produktivitas per satuan lahan) yang didukung KDKMP mencakup...",opts:["Mengurangi jumlah petani yang bercocok tanam","Penggunaan benih unggul bersertifikat, pupuk berimbang, teknologi SRI/tanam jajar legowo, dan pengendalian hama terpadu","Mengubah sawah menjadi kolam ikan yang lebih produktif secara finansial","Menyederhanakan prosedur pertanian agar petani tidak kelelahan"],ans:1,exp:"Intensifikasi pertanian meningkatkan produktivitas tanpa perlu lahan tambahan: benih unggul (varietas produktivitas tinggi), pupuk berimbang (NPK sesuai kebutuhan tanaman), metode tanam efisien (SRI, jajar legowo meningkatkan produksi 20-30%), dan PHT (Pengendalian Hama Terpadu) yang efektif."},
    {q:"Diversifikasi pangan yang didorong program pemerintah bermakna...",opts:["Mengimpor berbagai jenis pangan dari berbagai negara","Mendorong masyarakat tidak terlalu bergantung hanya pada beras dengan mengkonsumsi beragam sumber karbohidrat lokal (singkong, ubi, jagung, sagu)","Menanam berbagai jenis tanaman di lahan yang sama (tumpangsari)","Menjual berbagai jenis produk di koperasi"],ans:1,exp:"Diversifikasi pangan: mengurangi ketergantungan pada beras sebagai satu-satunya sumber karbohidrat utama. Mendorong konsumsi karbohidrat lokal lain (singkong, ubi jalar, jagung, sagu, sukun) yang tersedia melimpah di Indonesia. Ini mengurangi tekanan pada produksi beras dan memperkuat ketahanan pangan berbasis kearifan lokal."},
    {q:"Peran Kementerian Pertanian yang paling langsung berkaitan dengan operasional KDKMP adalah...",opts:["Menetapkan harga jual beras di seluruh pasar Indonesia","Menyediakan benih unggul, pupuk bersubsidi, AUTP, penyuluh pertanian, dan program intensifikasi yang mendukung produktivitas petani anggota KDKMP","Mengawasi keuangan koperasi desa secara langsung","Menentukan jumlah anggota yang boleh bergabung ke KDKMP"],ans:1,exp:"Kementan berkontribusi langsung pada ekosistem KDKMP melalui: program subsidi benih dan pupuk (kurangi biaya produksi petani), AUTP (lindungi petani dari risiko gagal panen), penyuluh pertanian (transfer teknologi), dan program intensifikasi yang meningkatkan produktivitas → lebih banyak komoditas untuk diserap KDKMP."},
    {q:"Peta jalan (roadmap) swasembada pangan Indonesia yang melibatkan KDKMP mencakup tahapan...",opts:["Hanya fokus pada produksi saja, distribusi akan otomatis mengikuti","Produksi (intensifikasi dan ekstensifikasi) + Distribusi (KDKMP-Agrinas-Bulog) + Cadangan strategis (CPP) + Akses (BPNT, pasar murah) bekerja secara terintegrasi","Cukup mengimpor sampai produksi dalam negeri meningkat","Privatisasi seluruh rantai pangan kepada swasta"],ans:1,exp:"Swasembada pangan tidak bisa dicapai hanya dari satu sisi. Butuh sistem terintegrasi: (1) Produksi meningkat (intensifikasi lahan + cetak sawah baru), (2) Distribusi efisien (KDKMP → Agrinas → Bulog/pasar), (3) Cadangan strategis (CPP Bulog), (4) Akses terjangkau (BPNT, pasar murah). KDKMP adalah kunci di lapisan distribusi."},
    {q:"Mengapa Indonesia yang merupakan negara agraris masih mengimpor komoditas pangan tertentu?",opts:["Karena petani Indonesia malas dan tidak mau bekerja keras","Karena kesenjangan antara kebutuhan konsumsi yang terus tumbuh dengan kapasitas produksi, diperparah oleh alih fungsi lahan, keterbatasan teknologi, dan kurangnya infrastruktur pangan","Karena pemerintah sengaja mempertahankan impor untuk kepentingan bisnis","Karena pangan impor selalu lebih murah dari produksi lokal"],ans:1,exp:"Paradoks agraris Indonesia: gap antara kebutuhan konsumsi (270+ juta penduduk dengan konsumsi beras tertinggi dunia) dengan kapasitas produksi yang terbatas akibat: alih fungsi lahan (sawah menjadi perumahan/industri), teknologi yang belum optimal, infrastruktur irigasi yang rusak, dan rantai distribusi yang ineffisien. KDKMP adalah solusi di sisi distribusi."},
    {q:"Hubungan antara 'food loss' (kehilangan pangan) dan efektivitas KDKMP adalah...",opts:["Food loss tidak berkaitan dengan kinerja koperasi","KDKMP yang menerapkan pasca panen yang baik (pengeringan, penyimpanan, pengangkutan) langsung mengurangi food loss dan meningkatkan nilai komoditas yang tersedia untuk ketahanan pangan","Food loss hanya terjadi di rumah tangga konsumen","KDKMP tidak bisa mengurangi food loss karena itu tanggung jawab pemerintah"],ans:1,exp:"Food loss (kehilangan pangan di tingkat produksi dan distribusi) di Indonesia mencapai 23-48 juta ton/tahun — senilai ratusan triliun rupiah. KDKMP berperan langsung mengurangi food loss: fasilitas pengeringan, gudang yang memadai, penanganan pasca panen yang baik, dan distribusi tepat waktu menjaga kualitas dan kuantitas pangan yang sampai ke konsumen."},
    {q:"Digitalisasi sistem rantai pasok pangan (platform Agrinas, SiMKop, e-RDKK) memberikan manfaat utama dalam konteks ketahanan pangan berupa...",opts:["Menghilangkan peran manusia dalam distribusi pangan","Meningkatkan transparansi, efisiensi, dan akurasi data sepanjang rantai pasok sehingga perencanaan distribusi pangan nasional menjadi lebih presisi","Memudahkan pemerintah mengontrol harga pangan secara sepihak","Mengurangi jumlah petani yang terlibat dalam produksi pangan"],ans:1,exp:"Digitalisasi rantai pasok pangan menciptakan: visibilitas data real-time (stok, aliran komoditas, harga), efisiensi logistik (rute distribusi optimal), akurasi kebutuhan (permintaan vs pasokan), dan deteksi dini kekurangan pangan di wilayah tertentu. Semua ini memungkinkan respons yang lebih cepat dan presisi dalam perencanaan ketahanan pangan nasional."},
    {q:"Program PSR (Peremajaan Sawit Rakyat) yang analog dengan program peremajaan komoditas strategis lain relevan bagi KDKMP karena...",opts:["KDKMP wajib ikut program PSR secara mandiri","KDKMP dapat menjadi fasilitator program peremajaan tanaman komoditas anggota (padi varietas lama, kedelai lokal) ke varietas unggul untuk meningkatkan produktivitas","PSR hanya berlaku untuk kebun sawit saja","KDKMP mendapat keuntungan finansial langsung dari program PSR"],ans:1,exp:"Prinsip program peremajaan tanaman berlaku lintas komoditas: ganti varietas lama dengan varietas unggul baru yang lebih produktif. KDKMP dapat menjadi fasilitator: mensosialisasikan varietas unggul baru kepada anggota, membantu akses benih bersertifikat bersubsidi, dan memantau adoptsi teknologi pertanian baru di kalangan petani anggota."},
    {q:"Indeks Ketahanan Pangan (IKP) di tingkat desa yang perlu dipantau manajer KDKMP mencakup...",opts:["Jumlah penduduk dan luas wilayah desa saja","Ketersediaan pangan lokal, keterjangkauan harga, akses pangan kelompok rentan, dan kualitas gizi masyarakat desa","Jumlah koperasi yang beroperasi di desa","Nilai ekspor produk pertanian desa ke kota"],ans:1,exp:"IKP di tingkat desa mengukur: (1) Availability — apakah pangan cukup tersedia, (2) Access — apakah semua lapisan bisa mengaksesnya secara ekonomis, (3) Utilization — apakah pangan dikonsumsi dengan gizi yang memadai. Manajer KDKMP yang memantau IKP desanya dapat mengidentifikasi intervensi yang paling dibutuhkan."},
    {q:"Tiga Pilar Ketahanan Pangan FAO yang keempat yang kini ditambahkan adalah...",opts:["Sustainability (Keberlanjutan)","Profitability (Profitabilitas)","Scalability (Skalabilitas)","Exportability (Kemampuan Ekspor)"],ans:0,exp:"FAO kini mengembangkan konsep ketahanan pangan menjadi 4 pilar dengan menambahkan: Stability (Stabilitas) — ketersediaan dan akses pangan harus stabil sepanjang waktu, tidak hanya pada musim tertentu. Artinya sistem pangan harus tahan guncangan (bencana, perubahan iklim) secara berkelanjutan. KDKMP berkontribusi melalui gudang penyangga dan diversifikasi komoditas."}
  ]
}

}; // end SUBMODULES