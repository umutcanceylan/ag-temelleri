
import { SectionData, QuestionType } from '../types';

export const courseData: SectionData[] = [
  {
    id: 1,
    title: 'Ağ Temelleri (Network Basics)',
    content: [
      "Ağ, paylaşım amacı ile iki ya da daha fazla elektronik cihazın bir araya getirilmesi ile oluşturulan yapıdır.",
      "Ağ deyince akla gelenler: Ağ üzerinden klasör paylaşımı, birden çok kullanıcı, hız, veri ve erişimdir.",
      "Bir ağ bağlantısında en az 2 makine gereklidir. En büyük ağ örneği İNTERNETTİR.",
      "GSM Ağları ve Bluetooth, internet harici haberleşmelerde birer ağ bağlantısıdır.",
      "Ağdaki cihazlar iki rol üstlenirler: Sunucu (Server) ve İstemci (Client).",
      "Ağda bulunan cihazlar: Modem, Bilgisayar, Sunucu, Access Point, Switch, Güvenlik Duvarları."
    ],
    questions: [
      {
        type: QuestionType.MultipleChoice,
        question: "Bir ağ bağlantısı kurulabilmesi için en az kaç cihaza ihtiyaç vardır?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2",
      },
      {
        type: QuestionType.FillInTheBlank,
        parts: ["Dünyadaki en büyük ağ ", null, "'dir."],
        correctAnswer: "İNTERNET",
      },
    ],
  },
  {
    id: 2,
    title: 'OSI ve TCP/IP Modelleri',
    content: [
      "Ağda iki cihaz arasındaki haberleşme katmanlar ile gerçekleştirilir. İki temel model OSI ve TCP/IP'dir.",
      "OSI Modeli 7 katmandan oluşur: Fiziksel, Veri Bağı, Ağ, Taşıma, Oturum, Sunum, Uygulama.",
      "TCP/IP Modeli 4 katmandan oluşur: Ağ Erişimi, Ağlar Arası (İnternet), Taşıma, Uygulama.",
      "Katmanlı bir yapıya ihtiyaç duyulmasının gerekçesi, ağdaki tüm cihazların senkron bir şekilde çalışabilmesi ve sorunların daha kolay çözülebilmesi için ortak bir dil oluşturmaktır."
    ],
    questions: [
        {
            type: QuestionType.MultipleChoice,
            question: "OSI modeli kaç katmandan oluşur?",
            options: ["4", "5", "7", "8"],
            correctAnswer: "7"
        }
    ],
    matchingExercise: {
        instruction: "OSI Katmanlarını TCP/IP katmanları ile eşleştirin.",
        pairs: [
            { id: '1', term: 'Fiziksel, Veri Bağı', definition: 'Ağ Erişim' },
            { id: '2', term: 'Ağ', definition: 'Ağlar Arası' },
            { id: '3', term: 'Taşıma', definition: 'Taşıma' },
            { id: '4', term: 'Oturum, Sunum, Uygulama', definition: 'Uygulama' },
        ]
    }
  },
  {
    id: 3,
    title: 'Uygulama Katmanı Protokolleri',
    content: [
      "Uygulama katmanı, kullanıcıya en yakın katmandır ve kullanılan protokole göre iletilerin güvenli yolla gönderilmesini sağlar."
    ],
    questions: [],
    matchingExercise: {
        instruction: "Protokolleri port numaraları ve açıklamaları ile eşleştirin.",
        pairs: [
            { id: 'p1', term: 'HTTP', definition: '80 - Web Sitesine Erişim İçin Kullanılır.' },
            { id: 'p2', term: 'HTTPS', definition: '443 - Web Sitelerine Güvenli Erişim İçin Kullanılır.' },
            { id: 'p3', term: 'FTP', definition: '20-21 - Dosya Aktarımı İçin Kullanılır.' },
            { id: 'p4', term: 'SSH', definition: '22 - Güvenli Uzak Bağlantı İçin Kullanılır.' },
            { id: 'p5', term: 'DNS', definition: '53 - Alan Adı (Domain) IP Çözümlemesi Yapar.' },
            { id: 'p6', term: 'SMTP', definition: '25/587 - E-Posta Göndermek İçin Kullanılır.' },
        ]
    }
  },
  {
    id: 4,
    title: 'IP Adresleme ve DHCP',
    content: [
      "DHCP (Dynamic Host Control Protocol), IP yapılandırma hizmeti kapsamında bilgisayara adres bilgisi sağlar.",
      "DHCP'nin sağladıkları: IP adresi, alt ağ maskesi, ağ geçidi ve DNS sunucu adresi.",
      "DHCP çalışma mantığı 4 aşamada gerçekleşir (DORA): Discover (Keşif), Offer (Öneri), Request (İstek), Acknowledgement (Onay).",
      "Komut satırına 'ipconfig' yazarak DHCP bilgilerine, 'ipconfig /all' ile tüm ağ ayarlarına ulaşılabilir."
    ],
    questions: [
      {
        type: QuestionType.FillInTheBlank,
        parts: ["DHCP'nin 4 aşamalı çalışma mantığına kısaca ", null, " denir."],
        correctAnswer: "DORA",
      },
      {
        type: QuestionType.MultipleChoice,
        question: "Aşağıdakilerden hangisi DHCP'nin sağladığı bilgilerden biri değildir?",
        options: ["IP Adresi", "MAC Adresi", "Alt Ağ Maskesi", "Ağ Geçidi"],
        correctAnswer: "MAC Adresi",
      }
    ]
  },
  {
    id: 5,
    title: 'Taşıma ve Ağ Katmanları',
    content: [
        "Taşıma Katmanı, iletiyi parçalara böler (Segmentasyon). Her parçanın boyutu genelde 1500 byte olur. Bu katmanda TCP ve UDP protokolleri çalışır.",
        "TCP (Transmission Control Protocol): Güvenli, garantili ve sıralı veri iletimi sağlar. Oturum açma gereklidir.",
        "UDP (User Datagram Protocol): Hızlı ama garantisiz veri iletimi sağlar. Oturum gerektirmez. Online oyunlar, canlı yayınlar gibi hızın önemli olduğu yerlerde kullanılır.",
        "Ağ Katmanı, iletilerin üzerine gönderici ve alıcı IP adreslerini ekler. Bu iletilere 'Paket' denir. Yönlendirme işlemi bu katmanda yapılır."
    ],
    questions: [
        {
            type: QuestionType.FillInTheBlank,
            parts: ["Taşıma katmanında, garantisiz ama hızlı veri aktarımı sağlayan protokol ", null, "'dir."],
            correctAnswer: "UDP",
        },
        {
            type: QuestionType.MultipleChoice,
            question: "Ağ katmanında IP adresi eklenmiş iletilere ne ad verilir?",
            options: ["Segment", "Çerçeve (Frame)", "Paket (Packet)", "Bit"],
            correctAnswer: "Paket (Packet)",
        }
    ]
  },
  {
    id: 6,
    title: 'Veri Bağı ve Fiziksel Katman',
    content: [
        "Veri Bağı Katmanı, paketlere hem hedefin hem de kaynağın MAC adreslerini ekler. MAC adresi alan bu yeni yapıya 'Çerçeve (Frame)' denir.",
        "MAC adresi 48 bittir. İlk 24 bit üretici firmaya aittir.",
        "HUB (Dağıtıcı): Gelen veriyi kime gideceğine bakmaksızın tüm portlara gönderir. Çatışma (collision) alanını büyütür.",
        "SWITCH (Anahtar): Gelen veriyi MAC adres tablosuna bakarak sadece ilgili porta gönderir. Hub'a göre daha akıllıdır ve ağ trafiğini azaltır.",
        "Fiziksel Katman: Veriyi sinyallere (0 ve 1) çevirerek kablolu veya kablosuz olarak iletimini sağlar."
    ],
    questions: [
        {
            type: QuestionType.MultipleChoice,
            question: "Gelen veriyi sadece ilgili MAC adresine gönderen ağ cihazı hangisidir?",
            options: ["HUB", "SWITCH", "Modem", "Repeater"],
            correctAnswer: "SWITCH",
        },
        {
            type: QuestionType.FillInTheBlank,
            parts: ["Veri Bağı Katmanında MAC adresi eklenmiş paketlere ", null, " denir."],
            correctAnswer: "Çerçeve",
        }
    ]
  }
];
