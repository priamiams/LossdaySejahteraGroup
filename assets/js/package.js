/**
 * PT Lossday Sejahtera Group - Package JavaScript
 * Package data, filtering, and modal functionality
 */

// Package Data
const packages = [
    // Gunung Packages
    {
        id: 'argopuro',
        name: 'Gunung Argopuro',
        category: 'gunung',
        price: 'Rp 2.400.000/orang',
        duration: '4 Hari 3 Malam',
        location: 'Jawa Timur',
        image: 'assets/img/gunung/argopuro.jpg',
        description: 'Open trip Gunung Argopuro merupakan paket pendakian ekspedisi terpanjang di Pulau Jawa yang dirancang khusus untuk pendaki berpengalaman. Pendakian lintas jalur ini menawarkan savana luas, hutan pegunungan, Danau Taman Hidup, hingga situs bersejarah Puncak Rengganis.',
        facilities: [
            'Transportasi PP',
            'Simaksi & perizinan resmi',
            'Guide & leader berpengalaman',
            'Porter logistik tim',
            'Tenda & perlengkapan camping',
            'Makan selama pendakian',
            'Air mineral',
            'P3K',
            'Dokumentasi'
        ],
        route: 'Baderan – Bremi (Lintas Jalur)',
        schedule: 'By Request',
        quota: 'Min 6 – Max 12',
        itinerary: [
            'Hari 1: Basecamp – Cikasur',
            'Hari 2: Cikasur – Savana Lonceng – Danau Taman Hidup',
            'Hari 3: Danau Taman Hidup – Puncak Rengganis',
            'Hari 4: Turun via Bremi'
        ],
        note: 'Wajib pengalaman pendakian dan kondisi fisik prima'
    },
    {
        id: 'agung',
        name: 'Gunung Agung',
        category: 'gunung',
        price: 'Rp 1.900.000/orang',
        duration: '3 Hari 2 Malam',
        location: 'Bali',
        image: 'assets/img/gunung/agung.jpg',
        description: 'Open trip Gunung Agung adalah paket pendakian prestisius menuju puncak tertinggi di Bali (3.142 mdpl). Berbeda dengan trek panjang Argopuro, Gunung Agung menawarkan pendakian vertikal yang curam dan teknis, dirancang bagi mereka yang mendambakan tantangan fisik tingkat tinggi dengan balutan nuansa sakral yang kental.',
        facilities: [
            'Transportasi PP',
            'Simaksi & perizinan resmi',
            'Guide & leader berpengalaman',
            'Porter logistik tim',
            'Tenda & perlengkapan camping',
            'Makan selama pendakian',
            'Air mineral',
            'P3K',
            'Dokumentasi'
        ],
        route: 'Pasar Agung',
        schedule: 'By Request',
        quota: 'Min 6 – Max 12',
        itinerary: [
            'Hari 1: Basecamp – Area Camp',
            'Hari 2: Summit Attack – Turun Ke Area Camp – Persiapan Turun',
            'Hari 3: Istirahat Di Basecamp – Trip Selesai',
        ],
        note: 'Wajib pengalaman pendakian dan kondisi fisik prima'
    },
    {
        id: 'bromo',
        name: 'Gunung Bromo + Tumpak Sewu',
        category: 'gunung',
        price: 'Rp 1.300.000/orang',
        duration: '1 Hari',
        location: 'Jawa Timur',
        image: 'assets/img/gunung/bromo.jpg',
        description: 'Open trip Gunung Bromo menghadirkan wisata alam ikonik dengan panorama sunrise terbaik di Indonesia. Peserta akan diajak menjelajahi lautan pasir, kawah aktif, savana, serta spot-spot favorit di kawasan TNBTS dengan konsep trip santai dan nyaman tanpa pendakian berat.',
        facilities: [
            'Transport jeep',
            'Tiket kawasan TNBTS',
            'Guide lokal',
            'Dokumentasi'
        ],
        route: 'Wisata kawasan Bromo',
        schedule: 'By Request',
        quota: 'Min 3 – Max 12',
        itinerary: [
            'Midnight trip',
            'Sunrise Penanjakan',
            'Kawah Bromo',
            'Savana',
            'Pasir Berbisik'
        ],
        note: 'Cocok untuk semua kalangan'
    },
    {
        id: 'ciremai',
        name: 'Gunung Ciremai',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/ciremai.jpg',
        description: 'Open trip Gunung Ciremai mengajak peserta mendaki gunung tertinggi di Jawa Barat dengan jalur panjang dan medan menantang. Dari puncak, peserta dapat menikmati kawah megah serta panorama pegunungan Jawa Barat yang luas dan menawan.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide pendakian',
            'Tenda & perlengkapan',
            'Makan selama pendakian',
            'Dokumentasi'
        ],
        route: 'Apuy / Palutungan / Sadarehe',
        schedule: 'By Request',
        quota: 'Min 4 – Max 10',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Medan cukup terjal'
    },
    {
        id: 'gede',
        name: 'Gunung Gede',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/gede.jpg',
        description: 'Open trip Gunung Gede merupakan pendakian populer di Jawa Barat dengan jalur tertata rapi dan panorama hutan hujan tropis. Trip ini menyuguhkan Alun-alun Surya Kencana yang dipenuhi edelweiss serta kawah aktif di puncak Gunung Gede.',
        facilities: [
            'Transportasi PP',
            'Simaksi TNGGP',
            'Guide',
            'Tenda & logistik',
            'Makan selama pendakian',
            'Dokumentasi'
        ],
        route: 'Cibodas / Gunung Putri',
        schedule: 'By Request',
        quota: 'Min 3 – Max 12',
        itinerary: [
            'Hari 1: Basecamp – Surya Kencana – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Cocok untuk pemula dengan kondisi fisik baik'
    },
    {
        id: 'kawah-ratu',
        name: 'Kawah Ratu',
        category: 'gunung',
        price: 'Rp 400.000/orang',
        duration: '1 Hari',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/kawahratu.jpg',
        description: 'Open trip Kawah Ratu merupakan pendakian ringan menuju kawah aktif Gunung Salak dengan jalur hutan hujan yang sejuk dan lembap. Trip ini sangat cocok bagi pemula atau peserta yang ingin menikmati wisata alam tanpa perjalanan panjang.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide lokal',
            'Air mineral',
            'Dokumentasi'
        ],
        route: 'Pasir Reungit',
        schedule: 'By Request',
        quota: 'Min 3 – Max 15',
        itinerary: [
            'Basecamp – Kawah Ratu – Explore – Kembali'
        ],
        note: 'Trip santai tanpa camping'
    },
    {
        id: 'kembang-bismo',
        name: 'Gunung Kembang & Bismo',
        category: 'gunung',
        price: 'Rp 800.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/kembangbismo.jpg',
        description: 'Open trip Gunung Kembang & Bismo menawarkan pendakian ramah pemula dengan jalur landai dan suasana hutan yang tenang. Dari puncaknya, peserta dapat menikmati panorama Gunung Sindoro dan Sumbing.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Blembem / Sikunang',
        schedule: 'By Request',
        quota: 'Min 3 – Max 16',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Cocok untuk pemula & healing trip'
    },
    {
        id: 'kerinci',
        name: 'Gunung Kerinci',
        category: 'gunung',
        price: 'Rp 1.900.000/orang',
        duration: '3 Hari 2 Malam',
        location: 'Sumatra',
        image: 'assets/img/gunung/kerinci.jpg',
        description: 'Open trip Gunung Kerinci mengajak pendaki menaklukkan puncak tertinggi di Sumatra dengan jalur panjang dan medan menantang. Peserta akan disuguhi panorama Danau Gunung Tujuh serta kawah aktif di puncak.',
        facilities: [
            'Transport lokal',
            'Simaksi TNKS',
            'Guide & porter',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Kersik Tuo',
        schedule: 'By Request',
        quota: 'Min 4 – Max 16',
        itinerary: [
            'Hari 1: Basecamp – Shelter',
            'Hari 2: Summit attack',
            'Hari 3: Turun'
        ],
        note: 'Khusus pendaki berpengalaman'
    },
    {
        id: 'lawu',
        name: 'Gunung Lawu',
        category: 'gunung',
        price: 'Rp 800.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/lawu.jpg',
        description: 'Open trip Gunung Lawu menawarkan pendakian dengan nuansa budaya dan spiritual. Jalur populer dengan warung tertinggi membuat pendakian terasa lebih bersahabat bagi pemula dan menengah.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Cemoro Sewu / Candi Cetho',
        schedule: 'By Request',
        quota: 'Min 3 – Max 12',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Suhu puncak cukup dingin'
    },
    {
        id: 'malabar',
        name: 'Gunung Malabar',
        category: 'gunung',
        price: 'Rp 400.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/malabar.jpg',
        description: 'Open trip Gunung Malabar menyajikan jalur hutan lebat dan kebun teh dengan suasana sejuk khas Jawa Barat. Cocok bagi pendaki yang menyukai jalur alami dan tidak ramai.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Cinyiruan',
        schedule: 'By Request',
        quota: 'Min 3 – Max 16',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Jalur hutan cukup rapat'
    },
    {
        id: 'merbabu',
        name: 'Gunung Merbabu',
        category: 'gunung',
        price: 'Rp 850.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/merbabu.jpg',
        description: 'Open trip Gunung Merbabu terkenal dengan savana luas, edelweiss, dan panorama pegunungan yang sangat indah. Trip ini menjadi favorit fotografer dan pendaki pemula hingga menengah.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Selo / Suwanting / Tekhelan',
        schedule: 'By Request',
        quota: 'Min 3 – Max 12',
        itinerary: [
            'Hari 1: Basecamp – Savana – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Spot foto sangat banyak'
    },
    {
        id: 'pangrango',
        name: 'Gunung Pangrango',
        category: 'gunung',
        price: 'Rp 750.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/pangrango.jpg',
        description: 'Open trip Gunung Pangrango menawarkan pendakian dengan jalur panjang dan suasana hutan yang masih sangat alami. Puncak Mandalawangi menjadi tujuan utama dengan panorama luas serta nuansa sunyi yang menenangkan.',
        facilities: [
            'Transportasi PP',
            'Simaksi TNGGP',
            'Guide pendakian',
            'Tenda & perlengkapan camping',
            'Makan selama pendakian',
            'Air mineral',
            'P3K',
            'Dokumentasi'
        ],
        route: 'Cibodas',
        schedule: 'By Request',
        quota: 'Min 3 – Max 10',
        itinerary: [
            'Hari 1: Basecamp – Camp Kandang Batu',
            'Hari 2: Summit attack Mandalawangi – Turun'
        ],
        note: 'Trek panjang, stamina wajib dijaga'
    },
    {
        id: 'papandayan',
        name: 'Gunung Papandayan',
        category: 'gunung',
        price: 'Rp 400.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/papandayan.jpg',
        description: 'Open trip Gunung Papandayan merupakan pendakian favorit dengan jalur ramah dan pemandangan lengkap, mulai dari kawah aktif, hutan mati, hingga padang edelweiss. Trip ini sangat cocok untuk pemula maupun pendaki santai.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Camp David',
        schedule: 'By Request',
        quota: 'Min 3 – Max 15',
        itinerary: [
            'Hari 1: Basecamp – Hutan Mati – Camp',
            'Hari 2: Sunrise – Summit attack – Turun'
        ],
        note: 'Cocok untuk pemula & first hike'
    },
    {
        id: 'prau',
        name: 'Gunung Prau',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/prau.jpg',
        description: 'Open trip Gunung Prau dikenal sebagai gunung dengan golden sunrise terbaik di Jawa Tengah. Jalur pendakian relatif pendek dan ramah, membuat trip ini sangat diminati oleh pendaki pemula.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Patak Banteng / Wates / Dieng',
        schedule: 'By Request',
        quota: 'Min 3 – Max 16',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Sunrise – Turun'
        ],
        note: 'Pendakian singkat & ramah pemula'
    },
    {
        id: 'ranu-kumbolo',
        name: 'Ranu Kumbolo',
        category: 'gunung',
        price: 'Rp 1.400.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Timur',
        image: 'assets/img/gunung/rakum.jpg',
        description: 'Open trip Ranu Kumbolo menghadirkan pengalaman trekking dan camping di danau ikonik jalur Gunung Semeru. Trip ini tidak sampai ke puncak Semeru dan cocok untuk peserta yang ingin menikmati suasana alam pegunungan dengan jalur relatif aman.',
        facilities: [
            'Transportasi PP',
            'Simaksi TNBTS',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Ranu Pane',
        schedule: 'By Request',
        quota: 'Min 3 – Max 16',
        itinerary: [
            'Hari 1: Ranu Pane – Ranu Kumbolo – Camping',
            'Hari 2: Sunrise – Turun'
        ],
        note: 'Tidak sampai puncak Semeru'
    },
    {
        id: 'raung',
        name: 'Gunung Raung',
        category: 'gunung',
        price: 'Rp 2.300.000/orang',
        duration: '3-4 Hari',
        location: 'Jawa Timur',
        image: 'assets/img/gunung/raung.jpg',
        description: 'Open trip Gunung Raung merupakan pendakian ekstrem dengan jalur teknikal dan kaldera raksasa. Trip ini dirancang khusus untuk pendaki profesional dengan pengalaman dan perlengkapan safety lengkap.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide teknikal',
            'Alat safety standar',
            'Logistik',
            'Dokumentasi'
        ],
        route: 'Kalibaru',
        schedule: 'By Request',
        quota: 'Min 4 – Max 16',
        itinerary: [
            'Basecamp – Camp – Summit attack – Turun'
        ],
        note: 'Wajib pengalaman & mental kuat'
    },
    {
        id: 'rinjani',
        name: 'Gunung Rinjani',
        category: 'gunung',
        price: 'Rp 2.800.000/orang',
        duration: '3-4 Hari',
        location: 'Lombok',
        image: 'assets/img/gunung/rinjani.jpg',
        description: 'Open trip Gunung Rinjani menawarkan pendakian kelas dunia dengan pemandangan Danau Segara Anak, gunung api, dan panorama Lombok dari ketinggian. Trip ini dirancang dengan sistem porter untuk kenyamanan peserta.',
        facilities: [
            'Transport lokal',
            'Simaksi',
            'Guide & porter',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Sembalun',
        schedule: 'By Request',
        quota: 'Min 4 – Max 18',
        itinerary: [
            'Hari 1: Sembalun – Camp',
            'Hari 2: Summit attack – Segara Anak',
            'Hari 3-4: Turun'
        ],
        note: 'Cuaca cepat berubah'
    },
    {
        id: 'sagara',
        name: 'Gunung Sagara',
        category: 'gunung',
        price: 'Rp 400.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/sagara.jpg',
        description: 'Open trip Gunung Sagara menawarkan pendakian sunyi dengan jalur hutan rapat dan minim pendaki. Cocok bagi pencinta eksplorasi dan ketenangan alam.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Cigaru',
        schedule: 'By Request',
        quota: 'Min 3 – Max 8',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Jalur masih alami & minim sinyal'
    },
    {
        id: 'salak1',
        name: 'Gunung Salak 1',
        category: 'gunung',
        price: 'Rp 450.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/salak1.jpg',
        description: 'Open trip Gunung Salak Jalur 1 menawarkan pendakian dengan medan hutan hujan lebat, jalur menantang, dan navigasi ketat. Cocok untuk pendaki menengah ke atas.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Pasir Reungit',
        schedule: 'By Request',
        quota: 'Min 3 – Max 8',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Hutan lebat & jalur licin'
    },
    {
        id: 'salak2',
        name: 'Gunung Salak 2',
        category: 'gunung',
        price: 'Rp 450.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Barat',
        image: 'assets/img/gunung/salak2.jpg',
        description: 'Open trip Gunung Salak Jalur 2 menawarkan variasi jalur dengan tantangan berbeda namun tetap menyuguhkan suasana hutan hujan tropis yang khas.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Cimelati',
        schedule: 'By Request',
        quota: 'Min 3 – Max 8',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Navigasi wajib mengikuti guide'
    },
    {
        id: 'sindoro',
        name: 'Gunung Sindoro',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/sindoro.jpg',
        description: 'Open trip Gunung Sindoro menawarkan pendakian dengan jalur terbuka dan panorama luas pegunungan Jawa Tengah. Pemandangan Gunung Sumbing menjadi daya tarik utama.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Kledung',
        schedule: 'By Request',
        quota: 'Min 3 – Max 17',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack – Turun'
        ],
        note: 'Jalur terbuka & panas siang hari'
    },
    {
        id: 'slamet',
        name: 'Gunung Slamet',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2-3 Hari',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/slamet.jpg',
        description: 'Open trip Gunung Slamet merupakan pendakian gunung tertinggi di Jawa Tengah dengan jalur panjang dan stamina tinggi. Cocok untuk pendaki yang ingin meningkatkan level pendakian.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Bambangan',
        schedule: 'By Request',
        quota: 'Min 4 – Max 17',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack',
            'Hari 3: Turun'
        ],
        note: 'Trek panjang & fisik wajib kuat'
    },
    {
        id: 'sumbing',
        name: 'Gunung Sumbing',
        category: 'gunung',
        price: 'Rp 700.000/orang',
        duration: '2-3 Hari',
        location: 'Jawa Tengah',
        image: 'assets/img/gunung/sumbing.jpg',
        description: 'Open trip Gunung Sumbing menawarkan pendakian dengan jalur berat dan medan menantang. Panorama Gunung Sindoro dari puncak menjadi daya tarik utama.',
        facilities: [
            'Transportasi PP',
            'Simaksi',
            'Guide',
            'Tenda & logistik',
            'Makan',
            'Dokumentasi'
        ],
        route: 'Garung',
        schedule: 'By Request',
        quota: 'Min 4 – Max 17',
        itinerary: [
            'Hari 1: Basecamp – Camp',
            'Hari 2: Summit attack',
            'Hari 3: Turun'
        ],
        note: 'Medan cukup berat'
    },
    
    // Pulau Packages
    {
        id: 'karimunjawa',
        name: 'Karimun Jawa',
        category: 'pulau',
        price: 'Rp 1.750.000/orang',
        duration: '3 Hari 2 Malam',
        location: 'Jawa Tengah',
        image: 'assets/img/pulau/karimunjawa.jpg',
        description: 'Open trip Karimun Jawa menawarkan pengalaman liburan bahari dengan perpaduan pantai pasir putih, laut jernih, dan keindahan bawah laut yang masih alami. Peserta akan diajak menikmati island hopping ke pulau-pulau eksotis, snorkeling di spot terumbu karang terbaik, serta menikmati suasana santai khas kepulauan tropis.',
        facilities: [
            'Transportasi PP (Jakarta/Semarang/Jepara)',
            'Kapal penyeberangan',
            'Penginapan (homestay/hotel)',
            'Makan 3x sehari',
            'Kapal island hopping',
            'Alat snorkeling',
            'Guide lokal',
            'Tiket wisata & retribusi',
            'Dokumentasi'
        ],
        route: 'Penyeberangan laut Jepara – Karimun Jawa',
        schedule: 'By Request',
        quota: 'Min 4 – Max 20',
        itinerary: [
            'Hari 1: Penyeberangan – Check-in – Sunset',
            'Hari 2: Island hopping – Snorkeling – BBQ',
            'Hari 3: Free time – Belanja oleh-oleh – Kembali'
        ],
        note: 'Cuaca laut mempengaruhi jadwal penyeberangan'
    },
        {
        id: 'pahawang',
        name: 'Pulau Pahawang',
        category: 'pulau',
        price: 'Rp 850.000/orang',
        duration: '3 Hari 2 Malam',
        location: 'Lampung',
        image: 'assets/img/pulau/pulaupahawang.jpg',
        description: 'Open trip Pulau Pahawang menawarkan liburan bahari dengan laut jernih, pantai berpasir putih, dan keindahan bawah laut yang memukau. Peserta akan diajak snorkeling di spot terbaik dengan terumbu karang warna-warni, island hopping ke pulau-pulau sekitar, serta menikmati suasana tropis yang tenang dan menyegarkan.',
        facilities: [
            'Transportasi PP',
            'Kapal penyeberangan',
            'Penginapan (homestay/hotel)',
            'Makan 3x sehari',
            'Kapal island hopping',
            'Alat snorkeling',
            'Guide lokal',
            'Tiket wisata & retribusi',
            'Dokumentasi'
        ],
        route: 'Dermaga Ketapang – Pulau Pahawang',
        schedule: 'By Request',
        quota: 'Min 4 – Max 20',
        itinerary: [
            'Hari 1: Meeting Point – Penyeberangan – Snorkeling',
            'Hari 2: Island hopping – Snorkeling – Sunset',
            'Hari 3: Free time – Kembali ke Dermaga'
        ],
        note: 'Cuaca laut mempengaruhi jadwal penyeberangan'
    },
    {
        id: 'pulau-1000',
        name: 'Kepulauan Seribu',
        category: 'pulau',
        price: 'Rp 400.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jakarta',
        image: 'assets/img/pulau/pulau1000.jpg',
        description: 'Open trip Kepulauan Seribu merupakan pilihan liburan laut praktis dari Jakarta. Trip ini menawarkan pantai bersih, laut tenang, dan aktivitas snorkeling tanpa perjalanan jauh. Cocok untuk liburan singkat akhir pekan.',
        facilities: [
            'Kapal cepat PP',
            'Penginapan',
            'Makan selama trip',
            'Alat snorkeling',
            'Guide',
            'Dokumentasi',
            'Tiket wisata'
        ],
        route: 'Marina Ancol – Pulau Tujuan',
        schedule: 'By Request',
        quota: 'Min 2 – Max 20',
        itinerary: [
            'Hari 1: Penyeberangan – Snorkeling – Sunset',
            'Hari 2: Free time – Kembali ke Jakarta'
        ],
        note: 'Pulau tujuan menyesuaikan kuota & cuaca'
    },
    {
        id: 'pulau-pari',
        name: 'Pulau Pari',
        category: 'pulau',
        price: 'Rp 425.000/orang',
        duration: '2 Hari 1 Malam',
        location: 'Jakarta',
        image: 'assets/img/pulau/pulaupari.jpg',
        description: 'Open trip Pulau Pari menghadirkan liburan santai dengan pantai landai dan pasir putih di Pantai Pasir Perawan. Trip ini cocok untuk keluarga, pasangan, maupun pemula yang ingin menikmati suasana laut tanpa aktivitas berat.',
        facilities: [
            'Kapal PP',
            'Homestay',
            'Makan selama trip',
            'Sepeda keliling pulau',
            'Alat snorkeling',
            'Guide',
            'Dokumentasi'
        ],
        route: 'Muara Angke – Pulau Pari',
        schedule: 'By Request',
        quota: 'Min 2 – Max 15',
        itinerary: [
            'Hari 1: Penyeberangan – Pantai Pasir Perawan – Sunset',
            'Hari 2: Snorkeling – Free time – Kembali'
        ],
        note: 'Trip santai & ramah keluarga'
    },
    {
        id: 'pulau-harapan',
        name: 'Pulau Harapan',
        category: 'pulau',
        price: 'Rp 450.000/orang',
        duration: '2-3 Hari',
        location: 'Jakarta',
        image: 'assets/img/pulau/pulauharapan.jpg',
        description: 'Open trip Pulau Harapan menawarkan pengalaman island hopping ke pulau-pulau kecil di sekitarnya dengan laut jernih dan spot snorkeling favorit. Trip ini cocok untuk peserta yang ingin eksplor lebih banyak pulau dalam satu perjalanan.',
        facilities: [
            'Kapal PP',
            'Penginapan',
            'Makan selama trip',
            'Kapal island hopping',
            'Alat snorkeling',
            'Guide',
            'Dokumentasi',
            'Tiket wisata'
        ],
        route: 'Muara Angke – Pulau Harapan',
        schedule: 'By Request',
        quota: 'Min 4 – Max 17',
        itinerary: [
            'Hari 1: Penyeberangan – Snorkeling – Sunset',
            'Hari 2: Island hopping – Free time – Kembali'
        ],
        note: 'Pulau hopping menyesuaikan kondisi laut'
    },
    
    // Gathering Packages
    {
        id: 'corporate-gathering',
        name: 'Corporate Gathering',
        category: 'gathering',
        price: 'Rp 500.000/orang',
        duration: 'Custom',
        location: 'Custom',
        image: 'assets/img/dokumentasi/gambar59.jpg',
        description: 'Paket Gathering Perusahaan dirancang untuk meningkatkan kebersamaan, kekompakan, dan komunikasi antar karyawan. Kegiatan dikemas secara profesional dengan konsep fun, produktif, dan fleksibel, dapat dipadukan dengan outbound, meeting, team building, hingga gala dinner sesuai kebutuhan perusahaan.',
        facilities: [
            'Transportasi PP',
            'Penginapan / resort / hotel',
            'Konsumsi (makan & coffee break)',
            'MC & fasilitator profesional',
            'Outbound & fun games',
            'Sound system',
            'Spanduk & atribut kegiatan',
            'Dokumentasi foto & video'
        ],
        route: 'Menyesuaikan kegiatan gathering',
        schedule: 'By Request',
        quota: 'Min 20 – Max 300',
        itinerary: [
            'Briefing',
            'Ice breaking',
            'Fun games / Team building',
            'Makan bersama',
            'Free time',
            'Penutupan'
        ],
        note: 'Konsep acara dapat disesuaikan dengan tujuan perusahaan'
    },
    {
        id: 'school-gathering',
        name: 'School Gathering',
        category: 'gathering',
        price: 'Rp 500.000/orang',
        duration: 'Custom',
        location: 'Custom',
        image: 'assets/img/dokumentasi/gambar60.jpg',
        description: 'Paket Gathering Sekolah dirancang sebagai kegiatan edukatif dan rekreatif untuk siswa maupun guru. Program ini menggabungkan unsur pembelajaran, kebersamaan, dan hiburan dalam suasana menyenangkan dan aman.',
        facilities: [
            'Transportasi PP',
            'Penginapan (jika menginap)',
            'Konsumsi',
            'MC & fasilitator',
            'Fun games & outbound edukatif',
            'Sound system',
            'P3K',
            'Dokumentasi'
        ],
        route: 'Menyesuaikan lokasi kegiatan',
        schedule: 'By Request',
        quota: 'Min 30 – Max 300',
        itinerary: [
            'Menyesuaikan acara kegiatan'
        ],
        note: 'Kegiatan disesuaikan dengan jenjang usia peserta'
    },
    {
        id: 'office-gathering',
        name: 'Office Gathering',
        category: 'gathering',
        price: 'Rp 500.000/orang',
        duration: 'Custom',
        location: 'Custom',
        image: 'assets/img/dokumentasi/gambar61.jpg',
        description: 'Gathering Kantor bertujuan untuk menyegarkan suasana kerja dan meningkatkan semangat tim. Program dibuat santai namun tetap terkonsep, cocok untuk outing kantor, perayaan ulang tahun perusahaan, maupun kegiatan internal lainnya.',
        facilities: [
            'Transportasi PP',
            'Penginapan / venue',
            'Konsumsi',
            'MC',
            'Fun games',
            'Sound system',
            'Dokumentasi'
        ],
        route: 'Menyesuaikan kegiatan outing',
        schedule: 'By Request',
        quota: 'Min 15 – Max 200',
        itinerary: [
            'Opening',
            'Games & activity',
            'Makan bersama',
            'Free time',
            'Closing'
        ],
        note: 'Konsep fleksibel & dapat disesuaikan budget'
    },
    {
        id: 'family-gathering',
        name: 'Family Gathering',
        category: 'gathering',
        price: 'Rp 500.000/orang',
        duration: 'Custom',
        location: 'Custom',
        image: 'assets/img/dokumentasi/gambar62.jpg',
        description: 'Family Gathering dirancang untuk menciptakan kebersamaan lintas usia dalam suasana santai dan menyenangkan. Aktivitas aman untuk anak-anak hingga orang dewasa, dengan konsep kekeluargaan dan hiburan ringan.',
        facilities: [
            'Transportasi PP',
            'Lokasi wisata / resort',
            'Konsumsi',
            'MC & fasilitator',
            'Fun games keluarga',
            'Sound system',
            'Dokumentasi'
        ],
        route: 'Menyesuaikan kegiatan family gathering',
        schedule: 'By Request',
        quota: 'Min 20 – Max 200',
        itinerary: [
            'Pembukaan',
            'Games keluarga',
            'Makan bersama',
            'Hiburan',
            'Penutupan'
        ],
        note: 'Konsep dan aktivitas bisa full custom sesuai kebutuhan'
    },
    
    // Transport Packages
    {
        id: 'sewa-mobil',
        name: 'Sewa Mobil',
        category: 'transport',
        price: 'Rp 500.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Pulau Jawa',
        image: 'assets/img/transport/sewa-mobil.png',
        description: 'Layanan sewa mobil kami dirancang untuk kebutuhan perjalanan pribadi, keluarga, maupun perjalanan dinas. Armada mobil dalam kondisi prima, bersih, dan nyaman, cocok untuk perjalanan dalam kota maupun luar kota dengan sistem sewa fleksibel dan driver berpengalaman.',
        facilities: [
            'Mobil terawat & bersih',
            'AC dingin',
            'Driver profesional & ramah',
            'Fleksibel rute & waktu',
            'BBM (opsional)',
            'Tol & parkir (opsional)'
        ],
        route: 'Dalam kota / Luar kota / Antar provinsi',
        schedule: 'Setiap hari / By Request',
        quota: '1 – 6 orang',
        itinerary: [
            'Penjemputan sesuai meeting point',
            'Perjalanan sesuai itinerary',
            'Drop off akhir trip'
        ],
        note: 'Overtime dikenakan biaya tambahan. Biaya tol, parkir & retribusi menyesuaikan rute.'
    },
    {
        id: 'sewa-minibus',
        name: 'Sewa Minibus',
        category: 'transport',
        price: 'Rp 2.000.000 - 3.200.000/hari',
        duration: 'Full Day / Multi Day',
        location: 'Jabodetabek',
        image: 'assets/img/transport/sewa-minibus.png',
        description: 'Layanan sewa minibus cocok untuk perjalanan rombongan kecil hingga menengah. Minibus menawarkan kenyamanan lebih dengan kapasitas ideal untuk wisata, acara keluarga, maupun outing kantor.',
        facilities: [
            'Minibus nyaman & bersih',
            'AC',
            'Reclining seat',
            'Audio system',
            'Driver berpengalaman'
        ],
        route: 'Dalam kota / Luar kota / Antar provinsi',
        schedule: 'Setiap hari / By Request',
        quota: '10 – 15 orang',
        itinerary: [
            'Penjemputan',
            'Perjalanan wisata/acara',
            'Drop off akhir trip'
        ],
        note: 'Kapasitas bagasi menyesuaikan barang bawaan. Biaya tol, parkir & retribusi menyesuaikan rute. Overtime dikenakan biaya tambahan.'
    },
    {
        id: 'sewa-elf',
        name: 'Sewa Elf',
        category: 'transport',
        price: 'Rp 2.000.000 - 6.000.000/Hari',
        duration: 'Full Day / Multi Day',
        location: 'Pulau Jawa',
        image: 'assets/img/transport/sewa-elf.png',
        description: 'Sewa Elf menjadi pilihan favorit untuk perjalanan rombongan dengan kenyamanan kabin luas dan kursi ergonomis. Cocok untuk wisata jarak jauh, ziarah, study tour, dan event.',
        facilities: [
            'Elf Short / Elf Long',
            'AC',
            'Kursi nyaman',
            'Bagasi luas',
            'Audio system',
            'Driver profesional'
        ],
        route: 'Dalam kota / Luar kota / Antar provinsi',
        schedule: 'Setiap hari / By Request',
        quota: '11 – 19 orang',
        itinerary: [
            'Penjemputan',
            'Perjalanan sesuai rencana',
            'Drop off'
        ],
        note: 'Tidak diperkenankan overload penumpang. Biaya tol, parkir & retribusi menyesuaikan rute. Overtime dikenakan biaya tambahan. Harga sewa menyesuaikan rute.'
    },
    {
        id: 'sewa-bus',
        name: 'Sewa Bus',
        category: 'transport',
        price: 'Rp 3.000.000 - 8.000.000/hari',
        duration: 'Full Day / Multi Day',
        location: 'Pulau Jawa',
        image: 'assets/img/transport/sewa-bus.png',
        description: 'Layanan sewa bus merupakan solusi terbaik untuk perjalanan rombongan besar. Armada bus kami cocok untuk company gathering, study tour sekolah, family gathering, dan event berskala besar dengan standar kenyamanan tinggi.',
        facilities: [
            'Medium / Big Bus',
            'AC',
            'Reclining seat',
            'TV & audio',
            'Bagasi luas',
            'Driver & co-driver profesional'
        ],
        route: 'Dalam kota / Luar kota / Antar provinsi',
        schedule: 'Setiap hari / By Request',
        quota: '25 – 59 orang',
        itinerary: [
            'Penjemputan',
            'Perjalanan wisata/acara',
            'Drop off akhir trip'
        ],
        note: 'Biaya tol, parkir & retribusi menyesuaikan rute. Overtime dikenakan biaya tambahan.'
    },
    
    // Gear Packages
    {
        id: 'sewa-alat-pendakian',
        name: 'Sewa Alat Pendakian Standar',
        category: 'gear',
        price: 'Rp 150.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Jakarta & Sekitarnya',
        image: 'assets/img/gear-rent/sewa-alat-pendakian.png',
        description: 'Layanan sewa alat pendakian standar kami disediakan untuk memenuhi kebutuhan pendaki yang ingin melakukan perjalanan gunung dengan perlengkapan lengkap tanpa harus membeli perlengkapan pribadi. Seluruh peralatan dalam kondisi layak pakai, bersih, dan rutin dicek sebelum digunakan.',
        facilities: [
            'Tenda gunung (kapasitas 2–4 orang)',
            'Carrier 45–70 liter',
            'Sleeping bag',
            'Matras',
            'Nesting (alat masak)',
            'Kompor portable',
            'Headlamp / senter',
            'Flysheet (jika dibutuhkan)'
        ],
        route: '-',
        schedule: 'Setiap hari / By Request',
        quota: 'Menyesuaikan jumlah alat tersedia',
        itinerary: [
            'Pengambilan alat',
            'Pengecekan kondisi',
            'Penggunaan selama pendakian',
            'Pengembalian alat'
        ],
        note: 'Kerusakan atau kehilangan alat menjadi tanggung jawab penyewa'
    },
    {
        id: 'sewa-tenda',
        name: 'Sewa Tenda Gunung',
        category: 'gear',
        price: 'Rp 55.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Jakarta & Sekitarnya',
        image: 'assets/img/gear-rent/sewa-tenda.png',
        description: 'Layanan sewa tenda gunung tersedia untuk pendaki yang membutuhkan perlindungan maksimal saat bermalam di alam terbuka. Tenda cocok digunakan di berbagai kondisi cuaca dan lokasi pendakian.',
        facilities: [
            'Tenda gunung waterproof',
            'Flysheet',
            'Pasak & tali tenda'
        ],
        route: '-',
        schedule: 'Setiap hari',
        quota: '2 – 4 orang / tenda',
        itinerary: [
            'Ambil tenda',
            'Gunakan selama pendakian',
            'Pengembalian'
        ],
        note: 'Kerusakan atau kehilangan alat menjadi tanggung jawab penyewa'
    },
    {
        id: 'sewa-carrier',
        name: 'Sewa Carrier',
        category: 'gear',
        price: 'Rp 35.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Jakarta & Sekitarnya',
        image: 'assets/img/gear-rent/sewa-carrier.png',
        description: 'Sewa carrier disediakan bagi pendaki yang membutuhkan tas gunung berkapasitas besar dan nyaman untuk membawa perlengkapan selama pendakian.',
        facilities: [
            'Carrier 45L / 50L / 60L / 70L',
            'Cover bag'
        ],
        route: '-',
        schedule: 'Setiap hari',
        quota: '1 orang / carrier',
        itinerary: [
            'Pengambilan carrier',
            'Penggunaan',
            'Pengembalian'
        ],
        note: 'Sesuaikan kapasitas carrier dengan postur tubuh. Kerusakan atau kehilangan alat menjadi tanggung jawab penyewa.'
    },
    {
        id: 'sewa-sleepingbag',
        name: 'Sewa Sleeping Bag & Matras',
        category: 'gear',
        price: 'Rp 25.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Jakarta & Sekitarnya',
        image: 'assets/img/gear-rent/sewa-sleepingbag.png',
        description: 'Layanan sewa sleeping bag dan matras cocok untuk menjaga kenyamanan dan kehangatan saat bermalam di gunung. Perlengkapan ini sangat penting untuk menjaga suhu tubuh selama istirahat.',
        facilities: [
            'Sleeping bag',
            'Matras'
        ],
        route: '-',
        schedule: 'Setiap hari',
        quota: '1 orang / set',
        itinerary: [
            'Pengambilan alat',
            'Penggunaan',
            'Pengembalian'
        ],
        note: 'Disarankan menggunakan inner tambahan untuk kebersihan. Kerusakan atau kehilangan alat menjadi tanggung jawab penyewa.'
    },
    {
        id: 'sewa-alat-masak',
        name: 'Sewa Alat Masak Gunung',
        category: 'gear',
        price: 'Rp 35.000/hari',
        duration: 'Harian / Multi Day',
        location: 'Jakarta & Sekitarnya',
        image: 'assets/img/gear-rent/sewa-alatmasak.png',
        description: 'Sewa alat masak gunung disediakan untuk memenuhi kebutuhan logistik dan konsumsi selama pendakian. Peralatan praktis dan ringan, cocok digunakan di alam terbuka.',
        facilities: [
            'Nesting',
            'Kompor portable',
            'Tabung gas kecil (opsional)'
        ],
        route: 'Gunung tujuan pendakian',
        schedule: 'Setiap hari',
        quota: '1 set / kelompok',
        itinerary: [
            'Pengambilan alat',
            'Penggunaan',
            'Pengembalian'
        ],
        note: 'Gas bisa include atau exclude sesuai kesepakatan. Kerusakan atau kehilangan alat menjadi tanggung jawab penyewa.'
    },
    
    // Private Trip
    {
        id: 'private-trip',
        name: 'Private Trip Custom',
        category: 'private',
        price: 'Custom',
        duration: 'Custom',
        location: 'Custom',
        image: 'assets/img/private-trip.png',
        description: 'Private Trip Custom memberikan Anda kebebasan untuk merencanakan perjalanan sesuai keinginan. Destinasi, jadwal, aktivitas, dan budget dapat disesuaikan dengan kebutuhan Anda. Konsultasikan rencana perjalanan Anda dengan tim kami untuk mendapatkan pengalaman terbaik.',
        facilities: [
            'Konsultasi perjalanan gratis',
            'Custom itinerary',
            'Destinasi pilihan Anda',
            'Aktivitas sesuai request',
            'Transportasi custom',
            'Akomodasi pilihan',
            'Guide profesional',
            'Dokumentasi'
        ],
        route: 'Custom sesuai permintaan',
        schedule: 'By Request',
        quota: 'Min 2 orang',
        itinerary: [
            'Konsultasi kebutuhan',
            'Penyusunan itinerary',
            'Konfirmasi booking',
            'Pelaksanaan trip',
            'Evaluasi perjalanan'
        ],
        note: 'Harga menyesuaikan dengan paket yang diminta. Konsultasikan kebutuhan Anda via WhatsApp untuk penawaran terbaik.'
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const paketContainer = document.getElementById('paketContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const paketModal = document.getElementById('paketModal');
    const closeModal = document.getElementById('closeModal');
    
    if (paketContainer) {
        // Render all packages initially
        renderPackages(packages);
        
        // Setup filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter and render packages
                const filteredPackages = filter === 'all' 
                    ? packages 
                    : packages.filter(pkg => pkg.category === filter);
                
                renderPackages(filteredPackages);
            });
        });
        
        // Setup modal
        if (paketModal && closeModal) {
            closeModal.addEventListener('click', () => {
                paketModal.style.display = 'none';
                document.body.style.overflow = '';
            });
            
            // Close modal when clicking outside
            paketModal.addEventListener('click', (e) => {
                if (e.target === paketModal) {
                    paketModal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
            
            // Close modal with ESC key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && paketModal.style.display === 'flex') {
                    paketModal.style.display = 'none';
                    document.body.style.overflow = '';
                }
            });
        }
    }
});

// Render packages to the container
function renderPackages(packages) {
    const container = document.getElementById('paketContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (packages.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>Tidak ada paket yang ditemukan untuk filter ini.</p>
            </div>
        `;
        return;
    }
    
    packages.forEach(pkg => {
        const packageCard = createPackageCard(pkg);
        container.appendChild(packageCard);
    });
    
    // Reinitialize animations for new elements
    setTimeout(() => {
        initPackageAnimations();
    }, 100);
}

// Create package card element
function createPackageCard(pkg) {
    const card = document.createElement('div');
    card.className = 'paket-card stagger-item';
    card.dataset.category = pkg.category;
    card.dataset.id = pkg.id;
    
    // Get category icon
    const categoryIcon = getCategoryIcon(pkg.category);
    
    card.innerHTML = `
        <div class="paket-card-image">
            <img src="${pkg.image}" alt="${pkg.name}" loading="lazy">
        </div>
        <div class="paket-card-content">
            <div class="paket-card-category">${categoryIcon} ${getCategoryName(pkg.category)}</div>
            <h3 class="paket-card-title">${pkg.name}</h3>
            <p class="paket-card-description">${pkg.description.substring(0, 100)}...</p>
            <div class="paket-card-meta">
                <span>📍 ${pkg.location}</span>
                <span>⏱️ ${pkg.duration}</span>
            </div>
            <div class="paket-card-price">${pkg.price}</div>
            <button class="btn btn-outline btn-view-details" data-package-id="${pkg.id}">
                Lihat Detail
            </button>
        </div>
    `;
    
    // Add click event for details
    const viewButton = card.querySelector('.btn-view-details');
    viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        showPackageDetails(pkg.id);
    });
    
    // Also make the whole card clickable
    card.addEventListener('click', () => {
        showPackageDetails(pkg.id);
    });
    
    return card;
}

// Show package details in modal
function showPackageDetails(packageId) {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg) return;
    
    const modal = document.getElementById('paketModal');
    const modalContent = document.querySelector('.modal-content');
    
    if (!modal || !modalContent) return;
    
    // Get category icon
    const categoryIcon = getCategoryIcon(pkg.category);
    
    // Create facilities list
    const facilitiesList = pkg.facilities.map(facility => 
        `<li>✔️ ${facility}</li>`
    ).join('');
    
    // Create itinerary list
    const itineraryList = pkg.itinerary.map(item => 
        `<li>📌 ${item}</li>`
    ).join('');
    
    modalContent.innerHTML = `
        <div class="modal-image-slider">
            <img src="${pkg.image}" alt="${pkg.name}" class="modal-main-image">
        </div>
        
        <div class="modal-header">
            <span class="modal-category">${categoryIcon} ${getCategoryName(pkg.category)}</span>
            <h2 class="modal-title">${pkg.name}</h2>
        </div>
        
        <p class="modal-description">${pkg.description}</p>
        
        <div class="modal-details">
            <div class="modal-detail-item">
                <h4>📍 Lokasi</h4>
                <p>${pkg.location}</p>
            </div>
            <div class="modal-detail-item">
                <h4>⏱️ Durasi</h4>
                <p>${pkg.duration}</p>
            </div>
            <div class="modal-detail-item">
                <h4>💰 Harga</h4>
                <p>${pkg.price}</p>
            </div>
            <div class="modal-detail-item">
                <h4>👥 Kuota</h4>
                <p>${pkg.quota}</p>
            </div>
        </div>
        
        <div class="modal-section">
            <h3> Jalur / Rute :</h3>
            <p>${pkg.route}</p>
        </div>
        
        <div class="modal-section">
            <h3> Jadwal :</h3>
            <p>${pkg.schedule}</p>
        </div>
        
        <div class="modal-section">
            <h3> Fasilitas :</h3>
            <ul class="facility-list">
                ${facilitiesList}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3> Rundown Perjalanan :</h3>
            <ul class="facility-list">
                ${itineraryList}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3> Catatan :</h3>
            <p>${pkg.note}</p>
        </div>
        
        <div class="modal-actions">
            <a href="https://wa.me/6289526907282?text=${encodeURIComponent(`Halo PT Lossday Sejahtera Group,\nSaya tertarik dengan paket ${pkg.name}.\nMohon info lengkapnya.`)}" 
               class="btn btn-primary" target="_blank">
                <svg viewBox="0 0 24 24" width="20" height="20">
                    <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01-1.86-1.87-4.36-2.9-7.01-2.9m0 1.5c2.25 0 4.37.88 5.96 2.46a8.4 8.4 0 0 1 2.46 5.96c0 4.61-3.76 8.37-8.37 8.37-1.4 0-2.8-.36-4.04-1.03l-.3-.15-3.12.82.83-3.04-.2-.32a8.28 8.28 0 0 1-1.26-4.25c0-4.61 3.76-8.37 8.37-8.37M8.54 7.33c-.15 0-.43.06-.66.31-.23.25-.87.86-.87 2.07 0 1.22.89 2.39 1 2.56.14.17 1.76 2.67 4.25 3.73.59.26 1.06.41 1.42.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28-.25-.13-1.46-.72-1.69-.8-.23-.08-.37-.12-.56.12-.16.24-.64.8-.78.97-.15.17-.29.19-.53.07-.26-.13-1.06-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.11-.56-1.34-.77-1.84-.2-.48-.41-.42-.56-.43-.14 0-.31-.01-.47-.01z"/>
                </svg>
                Konsultasi via WhatsApp
            </a>
            <button class="btn btn-outline" id="closeModalBtn">Tutup</button>
        </div>
    `;
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add close button event
    const closeBtn = document.getElementById('closeModalBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Scroll to top of modal
    modal.scrollTop = 0;
}

// Helper functions
function getCategoryIcon(category) {
    const icons = {
        'gunung': '🏔️',
        'pulau': '🏝️',
        'gathering': '👨‍👩‍👧‍👦',
        'transport': '🚗',
        'gear': '🎒',
        'private': '🎯'
    };
    return icons[category] || '📦';
}

function getCategoryName(category) {
    const names = {
        'gunung': 'Gunung',
        'pulau': 'Pulau',
        'gathering': 'Gathering',
        'transport': 'Transport',
        'gear': 'Perlengkapan',
        'private': 'Private Trip'
    };
    return names[category] || 'Paket';
}

// Initialize package animations
function initPackageAnimations() {
    const cards = document.querySelectorAll('.paket-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('stagger-item');
    });
}

// URL hash handling for direct package view
window.addEventListener('hashchange', handleHash);
window.addEventListener('load', handleHash);

function handleHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        const packageId = hash;
        const packageExists = packages.some(p => p.id === packageId);
        
        if (packageExists) {
            // If on paket page, show modal
            if (document.getElementById('paketContainer')) {
                showPackageDetails(packageId);
            }
        }
    }
}

// Export for global access
window.PackageManager = {
    packages,
    showPackageDetails,
    filterPackages: (category) => {
        const filtered = category === 'all' ? packages : packages.filter(p => p.category === category);
        renderPackages(filtered);
    }
};