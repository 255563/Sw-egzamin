const QUESTIONS = [
  {
    "section": "Architektury i procesory",
    "q": "Cechy architektury von Neumanna:",
    "answer": "a, b. Definicyjnie: rozkazy i dane są w tej samej pamięci i nie da się ich rozróżnić bez kontekstu programu.",
    "options": [
      [
        "a",
        "Rozkazy i dane są przechowywane w tej samej pamięci.",
        "T"
      ],
      [
        "b",
        "Nie da się rozróżnić danych od rozkazów (instrukcji).",
        "T"
      ],
      [
        "c",
        "Możliwość pracy równoległej - jednoczesny odczyt danych z pamięci programu oraz danych.",
        "N"
      ],
      [
        "d",
        "Często stosowana w mikrokontrolerach jednoukładowych.",
        "N"
      ]
    ],
    "id": 1
  },
  {
    "section": "Architektury i procesory",
    "q": "Cechy architektury harwardzkiej:",
    "answer": "Z podanych wariantów: a, b. Definicyjnie także: rozkazy i dane są przechowywane w oddzielnych pamięciach/przestrzeniach.",
    "options": [
      [
        "a",
        "Możliwość pracy równoległej - jednoczesny odczyt danych z pamięci programu oraz danych.",
        "T"
      ],
      [
        "b",
        "Często stosowana w mikrokontrolerach jednoukładowych.",
        "T"
      ],
      [
        "c",
        "Rozkazy i dane przechowywane są w tej samej pamięci.",
        "N"
      ],
      [
        "d",
        "Nie da się rozróżnić danych od rozkazów (instrukcji).",
        "N"
      ]
    ],
    "id": 2
  },
  {
    "section": "Architektury i procesory",
    "q": "Mikroprocesor to układ cyfrowy:",
    "answer": "Poprawne merytorycznie: a, b, c, d, e, f, h. Nie: pamięć programu jako element wewnętrzny i analogowe ALU.",
    "options": [
      [
        "a",
        "Komunikujący się z pamięciami oraz urządzeniami peryferyjnymi przy pomocy magistrali/magistral.",
        "T"
      ],
      [
        "b",
        "Wyposażony w jednostkę arytmetyczno-logiczną ALU.",
        "T"
      ],
      [
        "c",
        "Posiadający rejestry, np. PC, SP, LR/SR lub rejestry ogólnego przeznaczenia.",
        "T"
      ],
      [
        "d",
        "Obsługujący przerwania zewnętrzne/wewnętrzne oraz wyjątki.",
        "T"
      ],
      [
        "e",
        "Wyposażony w rejestry konfiguracyjne, adresowe i danych.",
        "T"
      ],
      [
        "f",
        "Wyposażony w magistralę do podłączania pamięci oraz układów peryferyjnych.",
        "T"
      ],
      [
        "g",
        "Wyposażony w pamięć programu jako typowy element wewnętrzny.",
        "N"
      ],
      [
        "h",
        "Wyposażony w magistralę adresową i danych.",
        "T"
      ],
      [
        "i",
        "Zbudowany z analogowej jednostki logicznej ALU.",
        "N"
      ]
    ],
    "note": "W przesłanych notatkach ten zestaw występuje w kilku wersjach. Odpowiedź powyżej jest scaleniem merytorycznym; gdy prowadzący wymaga dokładnie trzech pól, najczęściej powtarzały się: ALU, magistrale oraz rejestry.",
    "id": 3
  },
  {
    "section": "Architektury i procesory",
    "q": "Mikroprocesor to układ - wariant z egzaminu 2013:",
    "answer": "Brak bezspornie poprawnej odpowiedzi w podanej liście.",
    "options": [
      [
        "a",
        "Wyposażony w pamięć.",
        "N"
      ],
      [
        "b",
        "Wyposażony w urządzenia peryferyjne.",
        "N"
      ],
      [
        "c",
        "Wykonujący odwołania do pamięci w sposób asynchroniczny.",
        "N"
      ],
      [
        "d",
        "Wyposażony w analogowe ALU.",
        "N"
      ]
    ],
    "note": "Pamięć i peryferia są typowe dla mikrokontrolera albo systemu mikroprocesorowego, nie dla samego mikroprocesora. Dostęp asynchroniczny nie jest definicyjną cechą mikroprocesora.",
    "id": 4
  },
  {
    "section": "Architektury i procesory",
    "q": "Procesor z rodziny ARM:",
    "answer": "a. ARM jest architekturą RISC. Stwierdzenie o kilku rejestrach CPSR jest niepoprawne - CPSR jest jeden; mogą istnieć SPSR w trybach wyjątków.",
    "options": [
      [
        "a",
        "Jest układem o zredukowanej liczbie rozkazów RISC.",
        "T"
      ],
      [
        "b",
        "Jest układem o złożonej architekturze CISC.",
        "N"
      ],
      [
        "c",
        "Posiada 8-bitową magistralę adresową.",
        "N"
      ],
      [
        "d",
        "Posiada kilka rejestrów statusowych CPSR.",
        "N"
      ]
    ],
    "id": 5
  },
  {
    "section": "Architektury i procesory",
    "q": "ARM 926:",
    "answer": "a. ARM926EJ-S obsługuje m.in. tryby/instrukcje ARM, Thumb i Jazelle; nie jest 8-bitowy.",
    "options": [
      [
        "a",
        "Wykonuje rozkazy w trybie Thumb lub Jazelle.",
        "T"
      ],
      [
        "b",
        "Wyposażony w 20 rejestrów ogólnego przeznaczenia SP, LR i PC.",
        "N"
      ],
      [
        "c",
        "Może pracować w trybie ARM7 lub ARM9.",
        "N"
      ],
      [
        "d",
        "Jest CPU 8-bitowym.",
        "N"
      ]
    ],
    "id": 6
  },
  {
    "section": "Architektury i procesory",
    "q": "Timer procesora:",
    "answer": "c, d. Timer zlicza takty/cykle i może generować przerwania po zadanym czasie.",
    "options": [
      [
        "a",
        "Pozwala na konfigurację kierunku portu wejścia-wyjścia.",
        "N"
      ],
      [
        "b",
        "Jest wykorzystywany do budowania kolejek FIFO.",
        "N"
      ],
      [
        "c",
        "Zlicza elementarne cykle zegarowe, które można przeliczyć na opóźnienie czasowe.",
        "T"
      ],
      [
        "d",
        "Służy do generowania przerwań po upływie zadanego okresu czasu.",
        "T"
      ],
      [
        "e",
        "Umożliwia zmianę częstotliwości zegara taktującego rdzeń procesora w celu oszczędzania energii.",
        "N"
      ],
      [
        "f",
        "Nie jest wykorzystywany w systemach wbudowanych ze względu na duży koszt.",
        "N"
      ]
    ],
    "id": 7
  },
  {
    "section": "Przerwania i tryby pracy ARM",
    "q": "Tryb pracy FIQ procesora ARM wykorzystywany jest w przypadku, gdy:",
    "answer": "a - chodzi konkretnie o zgłoszenie szybkiego przerwania FIQ.",
    "options": [
      [
        "a",
        "Zostanie zgłoszone przerwanie FIQ.",
        "T"
      ],
      [
        "b",
        "Procesor rozpocznie wykonywanie nieznanego rozkazu.",
        "N"
      ],
      [
        "c",
        "Procesor wykona operację zapisu rejestru CPSR pracując w trybie USER.",
        "N"
      ],
      [
        "d",
        "Wystąpi wyjątek związany z dostępem do pamięci.",
        "N"
      ]
    ],
    "id": 8
  },
  {
    "section": "Przerwania i tryby pracy ARM",
    "q": "Tryb pracy IRQ procesora ARM wykorzystywany jest w przypadku, gdy:",
    "answer": "a. IRQ obsługuje zwykłe przerwania, np. od timera lub urządzenia peryferyjnego.",
    "options": [
      [
        "a",
        "Podczas obsługi przerwania od urządzenia peryferyjnego, np. timera.",
        "T"
      ],
      [
        "b",
        "Procesor rozpocznie wykonywanie nieznanego rozkazu.",
        "N"
      ],
      [
        "c",
        "Podczas wyjątku związanego z dostępem do pamięci programu.",
        "N"
      ],
      [
        "d",
        "Podczas wyjątku związanego z dostępem do pamięci danych.",
        "N"
      ]
    ],
    "id": 9
  },
  {
    "section": "Przerwania i tryby pracy ARM",
    "q": "Tryb pracy Abort procesora ARM wykorzystywany jest w przypadku, gdy:",
    "answer": "a. Abort dotyczy wyjątków dostępu do pamięci, np. prefetch abort lub data abort.",
    "options": [
      [
        "a",
        "Podczas wystąpienia wyjątku związanego z dostępem do pamięci.",
        "T"
      ],
      [
        "b",
        "Procesor wykona operację zapisu rejestru CPSR pracując w trybie USER.",
        "N"
      ],
      [
        "c",
        "Zostanie zgłoszone przerwanie.",
        "N"
      ],
      [
        "d",
        "Procesor rozpocznie wykonywanie nieznanego rozkazu.",
        "N"
      ]
    ],
    "id": 10
  },
  {
    "section": "Przerwania i tryby pracy ARM",
    "q": "Przerwania CPU wykorzystywane są:",
    "answer": "b. Przerwanie przerywa normalny tok pracy CPU i uruchamia procedurę obsługi zdarzenia asynchronicznego.",
    "options": [
      [
        "a",
        "Do generowania wyjątków dostępu do pamięci.",
        "N"
      ],
      [
        "b",
        "Do przerwania pracy CPU w celu wykonania asynchronicznego programu/procedury obsługi.",
        "T"
      ],
      [
        "c",
        "Gdy CPU wykona operację zapisu CPSR w trybie USER.",
        "N"
      ],
      [
        "d",
        "W celu wykonania instrukcji STMF DEQS.",
        "N"
      ]
    ],
    "id": 11
  },
  {
    "section": "Przerwania i tryby pracy ARM",
    "q": "Przerwania wektorowe:",
    "answer": "c. Adresy procedur obsługi są przechowywane w tablicy wektorów.",
    "options": [
      [
        "a",
        "Wykorzystują licznik wektorów do obsługi przerwań.",
        "N"
      ],
      [
        "b",
        "Są obsługiwane wyłącznie przez rdzeń CPU bez tablicy wektorów.",
        "N"
      ],
      [
        "c",
        "Adresy funkcji/procedur obsługi przechowywane są w tablicy.",
        "T"
      ],
      [
        "d",
        "Nie ma możliwości zmiany adresów funkcji.",
        "N"
      ]
    ],
    "id": 12
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Rejestry procesora zrealizowane są w postaci:",
    "answer": "a. Rejestry są realizowane jako bardzo szybka pamięć statyczna/przerzutniki dwustanowe.",
    "options": [
      [
        "a",
        "Przerzutników pamięci SRAM / ulotnej pamięci statycznej.",
        "T"
      ],
      [
        "b",
        "Szybkiej pamięci magnetycznej.",
        "N"
      ],
      [
        "c",
        "Szybkiej pamięci dynamicznej DRAM.",
        "N"
      ],
      [
        "d",
        "Uproszczonych kart perforowanych.",
        "N"
      ],
      [
        "e",
        "Szybkiej, nieulotnej pamięci Flash.",
        "N"
      ],
      [
        "f",
        "Przerzutników monostabilnych.",
        "N"
      ]
    ],
    "id": 13
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Rejestry procesora:",
    "answer": "a, b oraz warunkowo c. d jest fałszywe.",
    "options": [
      [
        "a",
        "Stanowią najwyższy szczebel w hierarchii pamięci - mają najszybszy dostęp.",
        "T"
      ],
      [
        "b",
        "Realizowane są w postaci przerzutników dwustanowych.",
        "T"
      ],
      [
        "c",
        "Rejestry mapowane na przestrzeń pamięci przechowują ustawienia urządzeń peryferyjnych.",
        "U"
      ],
      [
        "d",
        "Służą zwykle do przechowywania skomplikowanych struktur danych, np. tablic.",
        "N"
      ]
    ],
    "note": "Opcja c jest prawdziwa dla rejestrów peryferiów mapowanych w pamięć, ale nie dla rejestrów rdzenia CPU w ścisłym sensie.",
    "id": 14
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Rejestr statusowy CPSR (Current Program Status Register) procesora ARM:",
    "answer": "a, b, c, d, e, f, g, h. Nie służy do zgłaszania wyjątków ani do zmiany zegara rdzenia.",
    "options": [
      [
        "a",
        "Zawiera informację o bieżącym trybie pracy Thumb/ARM.",
        "T"
      ],
      [
        "b",
        "Zawiera informację o bieżącym trybie pracy Jazelle/ARM.",
        "T"
      ],
      [
        "c",
        "Zawiera flagi statusu wykonanych operacji N, Z, C, V.",
        "T"
      ],
      [
        "d",
        "Umożliwia zmianę trybu pracy w trybie uprzywilejowanym.",
        "T"
      ],
      [
        "e",
        "Umożliwia globalne maskowanie przerwań FIQ.",
        "T"
      ],
      [
        "f",
        "Umożliwia globalne wyłączenie/włączenie przerwań FIQ.",
        "T"
      ],
      [
        "g",
        "Umożliwia globalne wyłączenie/włączenie przerwań IRQ.",
        "T"
      ],
      [
        "h",
        "Udostępnia rezultaty operacji jednostki arytmetyczno-logicznej przez flagi.",
        "T"
      ],
      [
        "i",
        "Umożliwia zmianę częstotliwości zegara taktującego rdzeń.",
        "N"
      ],
      [
        "j",
        "Umożliwia obsługę wyjątków związanych z buforami FIFO.",
        "N"
      ],
      [
        "k",
        "Umożliwia zgłaszanie przerwań FIQ.",
        "N"
      ],
      [
        "l",
        "Umożliwia zgłaszanie wyjątków RESET, Abort lub UNDEF.",
        "N"
      ]
    ],
    "id": 15
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Rejestr procesora ARM o akronimie PIO_OER służy do:",
    "answer": "a. PIO_OER to Output Enable Register - ustawia wybrane linie PIO jako wyjścia.",
    "options": [
      [
        "a",
        "Ustawienia portu/pinu procesora jako wyjście.",
        "T"
      ],
      [
        "b",
        "Ustawienia portu/pinu procesora jako wejście.",
        "N"
      ],
      [
        "c",
        "Włączenia sterowania portem przez urządzenie peryferyjne.",
        "N"
      ],
      [
        "d",
        "Włączenia rezystora podciągającego piny portu wejścia-wyjścia.",
        "N"
      ]
    ],
    "id": 16
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Rejestr ARM o akronimie PIO_PER służy do:",
    "answer": "Włącza sterowanie linią przez kontroler PIO/GPIO. Nie ustawia kierunku i nie włącza pull-up.",
    "options": [
      [
        "a",
        "Ustawienia portu procesora jako wyjście.",
        "N"
      ],
      [
        "b",
        "Ustawienia portu procesora jako wejście.",
        "N"
      ],
      [
        "c",
        "Włączenia sterowania portem wejście-wyjście przez kontroler PIO/GPIO.",
        "T"
      ],
      [
        "d",
        "Włączenia rezystora podciągającego piny portu wejścia-wyjścia.",
        "N"
      ]
    ],
    "note": "Jeżeli w wariancie z PDF jest zapisane \"przez urządzenia peryferyjne\", traktuj to jako mylące sformułowanie. PIO_PER oddaje pin pod PIO, a nie pod alternatywną funkcję peryferyjną.",
    "id": 17
  },
  {
    "section": "Rejestry i pamięci",
    "q": "Pamięci statyczne RAM (SRAM):",
    "answer": "a, b, c, d, e, f. Opcja g jest nieprecyzyjna - SRAM jest droga, ale szeroko używana w małych pojemnościach; h-j są fałszywe.",
    "options": [
      [
        "a",
        "Są zbudowane z przerzutników bistabilnych.",
        "T"
      ],
      [
        "b",
        "Służą do buforowania danych, np. FIFO/LIFO.",
        "T"
      ],
      [
        "c",
        "Tracą dane po wyłączeniu zasilania.",
        "T"
      ],
      [
        "d",
        "Służą między innymi do przechowywania tymczasowych wyników obliczeń.",
        "T"
      ],
      [
        "e",
        "Charakteryzują się krótkim czasem dostępu.",
        "T"
      ],
      [
        "f",
        "Posiadają linię CS służącą do wyboru układu pamięci - dla zewnętrznych układów SRAM.",
        "T"
      ],
      [
        "g",
        "Są rzadko wykorzystywane w systemach wbudowanych ze względu na duży koszt produkcji.",
        "U"
      ],
      [
        "h",
        "Charakteryzują się nieulotnością przechowywanej informacji.",
        "N"
      ],
      [
        "i",
        "Nie pozwalają na usunięcie raz zapisanych informacji.",
        "N"
      ],
      [
        "j",
        "Mogą być kasowane wyłącznie światłem ultrafioletowym.",
        "N"
      ]
    ],
    "note": "W części notatek opcja o rzadkim wykorzystaniu SRAM jest zaznaczana jako odpowiedź. Na egzaminie zależy to od intencji: SRAM jest kosztowna, ale w embedded jest powszechna jako mała pamięć/cache/bufor.",
    "id": 18
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Interfejs zgodny ze standardem EIA RS-232:",
    "answer": "a, b, d. RS-232 to transmisja szeregowa, punkt-punkt, zwykle full-duplex; ramka zawiera bit startu.",
    "options": [
      [
        "a",
        "Umożliwia realizację transmisji szeregowej.",
        "T"
      ],
      [
        "b",
        "Umożliwia realizację transmisji w obu kierunkach jednocześnie (full-duplex).",
        "T"
      ],
      [
        "c",
        "Umożliwia realizację transmisji w jednym kierunku jednocześnie (half-duplex).",
        "N"
      ],
      [
        "d",
        "Ramka danych zawiera między innymi bit startu.",
        "T"
      ],
      [
        "e",
        "Umożliwia realizację transmisji równoległej.",
        "N"
      ],
      [
        "f",
        "Umożliwia realizację transmisji różnicowej.",
        "N"
      ],
      [
        "g",
        "Umożliwia obsługę kilku urządzeń podrzędnych.",
        "N"
      ]
    ],
    "id": 19
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Interfejs RS-232 - wariant z egzaminu 2013:",
    "answer": "c. Opcja a jest zbyt nieprecyzyjna; klasyczny RS-232 nie jest interfejsem 50 Mb/s.",
    "options": [
      [
        "a",
        "Umożliwia transmisję < 50 Mb/s.",
        "U"
      ],
      [
        "b",
        "Wykorzystuje ramkę o zmiennej długości 16 lub 32 b.",
        "N"
      ],
      [
        "c",
        "Umożliwia full duplex.",
        "T"
      ],
      [
        "d",
        "Wymaga rezystorów podciągających pull-up.",
        "N"
      ]
    ],
    "id": 20
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Ramka danych interfejsu zgodnego ze standardem EIA RS-232 może składać się z:",
    "answer": "a, b, c, e. Typowa ramka ma 1 bit startu, 7/8 bitów danych i 1 albo 2 bity stopu.",
    "options": [
      [
        "a",
        "8 bitów danych.",
        "T"
      ],
      [
        "b",
        "Pojedynczego bitu stopu.",
        "T"
      ],
      [
        "c",
        "Pojedynczego bitu startu.",
        "T"
      ],
      [
        "d",
        "12 bitów danych.",
        "N"
      ],
      [
        "e",
        "Podwójnego bitu stopu.",
        "T"
      ],
      [
        "f",
        "Podwójnego bitu startu.",
        "N"
      ]
    ],
    "id": 21
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Standard I2C:",
    "answer": "a, b, c, g, h. I2C jest szeregową magistralą open-drain/open-collector, half-duplex, z pull-up i adresowaniem urządzeń.",
    "options": [
      [
        "a",
        "Umożliwia realizację transmisji szeregowej.",
        "T"
      ],
      [
        "b",
        "Obsługuje kilka urządzeń podrzędnych.",
        "T"
      ],
      [
        "c",
        "Umożliwia transmisję w jednym kierunku w danym czasie (half-duplex).",
        "T"
      ],
      [
        "d",
        "Umożliwia transmisję równoległą.",
        "N"
      ],
      [
        "e",
        "Umożliwia transmisję różnicową.",
        "N"
      ],
      [
        "f",
        "Umożliwia transmisję w obu kierunkach jednocześnie (full-duplex).",
        "N"
      ],
      [
        "g",
        "Wymaga rezystorów podciągających pull-up w celu wymuszenia stanu wysokiego.",
        "T"
      ],
      [
        "h",
        "Obsługuje kilku masterów/multi-master.",
        "T"
      ]
    ],
    "id": 22
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Interfejs I2C (Inter-Integrated Circuit) - wariant z fałszywymi dystraktorami:",
    "answer": "Brak poprawnej odpowiedzi w tej liście.",
    "options": [
      [
        "a",
        "Jest wyposażony w dwa komplementarne tranzystory MOS.",
        "N"
      ],
      [
        "b",
        "Pozwala na transmisję danych z szybkością większą niż 100 Mb/s.",
        "N"
      ],
      [
        "c",
        "Pozwala na transmisję danych do maksymalnie 16 urządzeń Slave.",
        "N"
      ],
      [
        "d",
        "Wymaga użycia sygnału wyboru układu Chip Select.",
        "N"
      ]
    ],
    "id": 23
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Interfejs SPI (Serial Peripheral Interface):",
    "answer": "a, b, c, d, f. SPI jest synchroniczne, master generuje zegar, może obsługiwać wiele slave przez linie wyboru układu.",
    "options": [
      [
        "a",
        "Umożliwia realizację transmisji master-slave.",
        "T"
      ],
      [
        "b",
        "Do transmisji potrzebuje przynajmniej trzech sygnałów, nie licząc masy.",
        "T"
      ],
      [
        "c",
        "Umożliwia realizację transmisji master-multi-slave.",
        "T"
      ],
      [
        "d",
        "Umożliwia obsługę kilku urządzeń podrzędnych.",
        "T"
      ],
      [
        "e",
        "Umożliwia realizację transmisji różnicowej.",
        "N"
      ],
      [
        "f",
        "Wykorzystuje sygnał zegara generowany przez urządzenie Master.",
        "T"
      ],
      [
        "g",
        "Wykorzystuje sygnał zegara generowany przez urządzenie Slave.",
        "N"
      ],
      [
        "h",
        "Umożliwia standardową transmisję multi-master-slave.",
        "N"
      ]
    ],
    "note": "W praktycznym SPI zwykle występuje też linia CS/SS dla każdego slave. W notatkach minimalną liczbę sygnałów liczono jako MOSI, MISO i SCLK.",
    "id": 24
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Standard USB (Universal Serial Bus):",
    "answer": "a, b, c, e, f, g. Podstawowe USB dostarcza 5 V; 12 V dotyczy tylko wybranych negocjowanych profili USB PD, więc nie zaznaczam jako cechy standardowej.",
    "options": [
      [
        "a",
        "Umożliwia dołączenie do 127 urządzeń do magistrali.",
        "T"
      ],
      [
        "b",
        "Umożliwia detekcję błędów i retransmisję/korekcję w odpowiednich trybach.",
        "T"
      ],
      [
        "c",
        "Umożliwia transmisję danych w trybie Low lub Full Speed.",
        "T"
      ],
      [
        "d",
        "Umożliwia dostarczanie napięcia zasilającego 12 V jako typowa cecha USB.",
        "N"
      ],
      [
        "e",
        "Umożliwia transmisję danych w trybie izochronicznym.",
        "T"
      ],
      [
        "f",
        "Umożliwia realizację transmisji o szybkości do 5 Gb/s w USB 3.0 SuperSpeed.",
        "T"
      ],
      [
        "g",
        "Umożliwia realizację transmisji różnicowej.",
        "T"
      ]
    ],
    "id": 25
  },
  {
    "section": "Interfejsy komunikacyjne",
    "q": "Port komputera z wyjściem typu otwarty dren:",
    "answer": "a, b. Wyjście typu otwarty dren wymaga podciągania do stanu wysokiego i jest używane m.in. w I2C.",
    "options": [
      [
        "a",
        "Wymaga użycia rezystora podciągającego.",
        "T"
      ],
      [
        "b",
        "Jest wykorzystywany w interfejsie I2C.",
        "T"
      ],
      [
        "c",
        "Jest wyposażony w dwa komplementarne tranzystory MOS.",
        "N"
      ],
      [
        "d",
        "Wymaga zasilania napięciem przemiennym.",
        "N"
      ]
    ],
    "id": 26
  },
  {
    "section": "Sterowniki",
    "q": "Sterownik urządzenia (driver) to fragment programu:",
    "answer": "a, b, c. Sterownik dostarcza funkcje obsługi urządzenia i często działa w jądrze, odwołując się do rejestrów sprzętu.",
    "options": [
      [
        "a",
        "Dostarczający zestaw funkcji obsługujących urządzenia peryferyjne procesora.",
        "T"
      ],
      [
        "b",
        "Pracujący w przestrzeni jądra systemu operacyjnego.",
        "T"
      ],
      [
        "c",
        "Pod systemem operacyjnym odwołujący się bezpośrednio do rejestrów danego urządzenia.",
        "T"
      ],
      [
        "d",
        "Zwykle pisany w języku niskiego poziomu, np. asembler.",
        "N"
      ],
      [
        "e",
        "Pracujący w przestrzeni programu użytkownika.",
        "N"
      ],
      [
        "f",
        "Zwykle pisany w Javie.",
        "N"
      ]
    ],
    "id": 27
  }
];
const SOURCES = [
  "teoria-systemow-zabudowanych-z-przerwaniami-pytania-i-odpowiedzi.pdf",
  "arm-testy-mikroprocesorow-pytania-i-odpowiedzi.pdf",
  "mikroprocesory-i-ich-architektura-pytania-do-egzaminu-wrz-2017.pdf",
  "sw-architektura-i-rejestry-na-egzamin-pod-egzamin.pdf",
  "systemy-wbudowane-notatki-do-egzaminu-z-architektury-i-procesorow.pdf",
  "mikroprocesory-i-ich-interfejsy-egzamin-2013-termin-1.pdf",
  "partia-3-pulapki-jezyka-c-i-inzynieria-oprogramowania-lpc1769.pdf",
  "egzamin-czerwiec-2018-pytania-i-odpowiedzi-z-architektury-mikroprocesorow.pdf",
  "ogolnie-o-procesorach-arm-i-mikroprocesorach-wyklad.pdf"
];


const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

const statusLabel = { T: "TAK", N: "NIE", U: "UWAGA" };
const statusClass = { T: "good", N: "bad", U: "warn" };

const state = {
  theme: localStorage.getItem("questionsTheme") || "light",
  section: "all",
  order: "normal",
  limit: "all",
  list: [],
  current: 0,
  answers: new Map(),
  summaryVisible: false
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function normalize(value) {
  return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function getSections() {
  const sections = [];
  for (const q of QUESTIONS) {
    if (!sections.includes(q.section)) sections.push(q.section);
  }
  return sections;
}

function getAnswer(questionId) {
  if (!state.answers.has(questionId)) {
    state.answers.set(questionId, { selected: [], checked: false, correct: false });
  }
  return state.answers.get(questionId);
}

function correctLetters(q) {
  return q.options.filter(option => option[2] === "T").map(option => option[0]);
}

function neutralLetters(q) {
  return q.options.filter(option => option[2] === "U").map(option => option[0]);
}

function arraysEqualAsSets(a, b) {
  if (a.length !== b.length) return false;
  const set = new Set(a);
  return b.every(item => set.has(item));
}

function evaluate(q, selected) {
  const correct = correctLetters(q);
  const neutral = new Set(neutralLetters(q));
  const selectedWithoutNeutral = selected.filter(letter => !neutral.has(letter));
  return arraysEqualAsSets(selectedWithoutNeutral, correct);
}

function setup() {
  $("#totalQuestionsStat").textContent = QUESTIONS.length;
  $("#sectionsStat").textContent = getSections().length;

  const sectionFilter = $("#sectionFilter");
  sectionFilter.innerHTML = `<option value="all">Wszystkie sekcje</option>` + getSections().map(sec => `<option value="${escapeHtml(sec)}">${escapeHtml(sec)}</option>`).join("");

  $("#sourceList").innerHTML = SOURCES.map(src => `<li>${escapeHtml(src)}</li>`).join("");

  sectionFilter.addEventListener("change", event => { state.section = event.target.value; });
  $("#orderSelect").addEventListener("change", event => { state.order = event.target.value; });
  $("#limitSelect").addEventListener("change", event => { state.limit = event.target.value; });
  $("#startBtn").addEventListener("click", () => startQuiz());
  $("#restartHeroBtn").addEventListener("click", () => startQuiz());
  $("#printBtn").addEventListener("click", () => window.print());
  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#finishBtn").addEventListener("click", showSummary);
  $("#mistakesBtn").addEventListener("click", repeatMistakes);

  applyTheme();
  startQuiz(false);
}

function buildPool() {
  let pool = state.section === "all" ? QUESTIONS.slice() : QUESTIONS.filter(q => q.section === state.section);
  if (state.order === "random") pool = shuffle(pool);
  if (state.limit !== "all") pool = pool.slice(0, Number(state.limit));
  return pool;
}

function prepareQuestionForRun(question) {
  return {
    ...question,
    // Kolejność wariantów jest losowana raz przy starcie testu.
    // Potem pozostaje stabilna podczas przechodzenia między pytaniami i sprawdzania.
    options: shuffle(question.options)
  };
}

function startQuiz(scroll = true, customList = null) {
  state.list = (customList || buildPool()).map(prepareQuestionForRun);
  state.current = 0;
  state.answers = new Map();
  state.summaryVisible = false;
  if (!state.list.length) {
    $("#quizCard").innerHTML = `<div class="empty-state"><h2>Brak pytań</h2><p>Wybierz inną sekcję albo liczbę pytań.</p></div>`;
    return;
  }
  $("#summaryCard").hidden = true;
  $("#quizCard").hidden = false;
  renderQuiz();
  if (scroll) $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderQuiz() {
  if (!state.list.length) return;
  const q = state.list[state.current];
  const answer = getAnswer(q.id);
  const correct = correctLetters(q);
  const neutral = neutralLetters(q);
  const instruction = correct.length === 0
    ? "W tym pytaniu może nie być żadnej poprawnej odpowiedzi."
    : correct.length === 1
      ? "Zaznacz jedną odpowiedź."
      : `Zaznacz ${correct.length} odpowiedzi.`;

  const options = q.options.map(option => {
    const [letter, text, status] = option;
    const selected = answer.selected.includes(letter);
    let cls = selected ? " selected" : "";
    let badge = "";
    if (answer.checked) {
      cls += ` checked status-${status}`;
      if (status === "T" && selected) cls += " hit";
      if (status === "T" && !selected) cls += " missed";
      if (status === "N" && selected) cls += " wrong";
      if (status === "U" && selected) cls += " neutral-selected";
      badge = `<span class="pill ${statusClass[status]}">${statusLabel[status]}</span>`;
    }
    return `<button class="quiz-option${cls}" type="button" data-letter="${escapeHtml(letter)}" ${answer.checked ? "disabled" : ""}>
      <span class="letter">${escapeHtml(letter)}</span>
      <span class="option-text">${escapeHtml(text)}</span>
      ${badge}
    </button>`;
  }).join("");

  const selectedInfo = answer.selected.length ? answer.selected.map(l => l.toUpperCase()).join(", ") : "brak";
  const result = answer.checked ? `<div class="answer-result ${answer.correct ? "is-correct" : "is-wrong"}">
    ${answer.correct ? "Poprawnie." : "Błędnie."} Twoje zaznaczenia: <b>${escapeHtml(selectedInfo)}</b>.
  </div>` : "";

  const answerBlock = answer.checked ? `<div class="answer"><b>Odpowiedź:</b> ${escapeHtml(q.answer)}</div>` : "";
  const noteBlock = answer.checked && q.note ? `<div class="note"><strong>Uwaga:</strong> ${escapeHtml(q.note)}</div>` : "";
  const neutralInfo = neutral.length ? `<p class="mini-note">Warianty niejednoznaczne: ${neutral.map(l => l.toUpperCase()).join(", ")} — pokazują się po sprawdzeniu, ale nie liczą się do wyniku.</p>` : "";

  $("#quizCard").innerHTML = `
    <div class="question-top">
      <div>
        <p class="quiz-meta">${escapeHtml(q.section)} · pytanie ${state.current + 1} z ${state.list.length}</p>
        <h3 class="question-title">${escapeHtml(q.q)}</h3>
        <p class="quiz-instruction">${instruction}</p>
      </div>
      <span class="question-id">#${q.id}</span>
    </div>
    <div class="quiz-options">${options}</div>
    ${neutralInfo}
    ${result}
    ${answerBlock}
    ${noteBlock}
    <div class="quiz-actions">
      <button id="prevBtn" class="ghost-btn" type="button" ${state.current === 0 ? "disabled" : ""}>Poprzednie</button>
      <button id="clearBtn" class="ghost-btn" type="button" ${answer.checked ? "disabled" : ""}>Wyczyść</button>
      <button id="checkBtn" class="primary-btn" type="button" ${answer.checked ? "disabled" : ""}>Sprawdź</button>
      <button id="nextBtn" class="secondary-btn" type="button">${state.current === state.list.length - 1 ? "Podsumowanie" : "Następne"}</button>
    </div>
  `;

  $$(".quiz-option", $("#quizCard")).forEach(btn => {
    btn.addEventListener("click", event => toggleOption(event.currentTarget.dataset.letter));
  });
  $("#prevBtn").addEventListener("click", previousQuestion);
  $("#clearBtn").addEventListener("click", clearCurrent);
  $("#checkBtn").addEventListener("click", checkCurrent);
  $("#nextBtn").addEventListener("click", nextQuestion);

  renderProgress();
}

function toggleOption(letter) {
  const q = state.list[state.current];
  const answer = getAnswer(q.id);
  if (answer.checked) return;
  if (answer.selected.includes(letter)) {
    answer.selected = answer.selected.filter(item => item !== letter);
  } else {
    answer.selected.push(letter);
  }
  renderQuiz();
}

function clearCurrent() {
  const q = state.list[state.current];
  const answer = getAnswer(q.id);
  if (answer.checked) return;
  answer.selected = [];
  renderQuiz();
}

function checkCurrent() {
  const q = state.list[state.current];
  const answer = getAnswer(q.id);
  answer.checked = true;
  answer.correct = evaluate(q, answer.selected);
  renderQuiz();
}

function previousQuestion() {
  if (state.current > 0) {
    state.current -= 1;
    hideSummary();
    renderQuiz();
  }
}

function nextQuestion() {
  if (state.current < state.list.length - 1) {
    state.current += 1;
    hideSummary();
    renderQuiz();
  } else {
    showSummary();
  }
}

function stats() {
  const answers = state.list.map(q => getAnswer(q.id));
  const checked = answers.filter(a => a.checked).length;
  const correct = answers.filter(a => a.checked && a.correct).length;
  const wrong = answers.filter(a => a.checked && !a.correct).length;
  const unchecked = state.list.length - checked;
  const percent = checked ? Math.round((correct / checked) * 100) : 0;
  return { checked, correct, wrong, unchecked, percent };
}

function renderProgress() {
  const s = stats();
  const progress = state.list.length ? ((state.current + 1) / state.list.length) * 100 : 0;
  $("#progressBar").style.width = `${progress}%`;
  $("#currentNumber").textContent = `${state.current + 1}/${state.list.length}`;
  $("#checkedCount").textContent = s.checked;
  $("#correctCount").textContent = s.correct;
  $("#scoreValue").textContent = `${s.correct}/${s.checked || 0}`;
  $("#mistakesBtn").disabled = s.wrong === 0;

  $("#questionDots").innerHTML = state.list.map((q, index) => {
    const a = getAnswer(q.id);
    const cls = ["dot"];
    if (index === state.current) cls.push("active");
    if (a.checked && a.correct) cls.push("correct");
    if (a.checked && !a.correct) cls.push("wrong");
    return `<button class="${cls.join(" ")}" type="button" data-index="${index}" aria-label="Przejdź do pytania ${index + 1}">${index + 1}</button>`;
  }).join("");

  $$("#questionDots .dot").forEach(btn => {
    btn.addEventListener("click", event => {
      state.current = Number(event.currentTarget.dataset.index);
      hideSummary();
      renderQuiz();
    });
  });
}

function showSummary() {
  const s = stats();
  const missingText = s.unchecked ? `<p class="mini-note">Nie wszystkie pytania są sprawdzone. Do wyniku procentowego liczę tylko sprawdzone pytania.</p>` : "";
  const wrongQuestions = state.list.filter(q => {
    const a = getAnswer(q.id);
    return a.checked && !a.correct;
  });
  const wrongList = wrongQuestions.length ? `<ol class="wrong-list">${wrongQuestions.map(q => `<li><button type="button" data-id="${q.id}">${escapeHtml(q.q)}</button></li>`).join("")}</ol>` : `<p>Brak błędnych odpowiedzi w sprawdzonych pytaniach.</p>`;

  $("#summaryCard").innerHTML = `
    <div class="summary-hero">
      <p class="eyebrow">Podsumowanie</p>
      <h2>${s.percent}%</h2>
      <p>Poprawne: <b>${s.correct}</b> · błędne: <b>${s.wrong}</b> · niesprawdzone: <b>${s.unchecked}</b></p>
      ${missingText}
    </div>
    <div class="summary-actions">
      <button id="backToCurrentBtn" class="secondary-btn" type="button">Wróć do quizu</button>
      <button id="repeatMistakesSummaryBtn" class="primary-btn" type="button" ${wrongQuestions.length ? "" : "disabled"}>Powtórz błędne</button>
      <button id="newQuizSummaryBtn" class="ghost-btn" type="button">Nowy quiz</button>
    </div>
    <h3>Błędne pytania</h3>
    ${wrongList}
  `;

  $("#summaryCard").hidden = false;
  $("#quizCard").hidden = true;
  state.summaryVisible = true;
  $("#backToCurrentBtn").addEventListener("click", () => { hideSummary(); renderQuiz(); });
  $("#repeatMistakesSummaryBtn").addEventListener("click", repeatMistakes);
  $("#newQuizSummaryBtn").addEventListener("click", () => startQuiz());
  $$(".wrong-list button", $("#summaryCard")).forEach(btn => {
    btn.addEventListener("click", event => {
      const id = Number(event.currentTarget.dataset.id);
      const idx = state.list.findIndex(q => q.id === id);
      if (idx >= 0) {
        state.current = idx;
        hideSummary();
        renderQuiz();
      }
    });
  });
}

function hideSummary() {
  $("#summaryCard").hidden = true;
  $("#quizCard").hidden = false;
  state.summaryVisible = false;
}

function repeatMistakes() {
  const wrong = state.list.filter(q => {
    const a = getAnswer(q.id);
    return a.checked && !a.correct;
  });
  if (!wrong.length) return;
  startQuiz(true, wrong);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#themeToggle").textContent = state.theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("questionsTheme", state.theme);
  applyTheme();
}

setup();
