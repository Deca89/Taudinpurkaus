# Taudinpurkaus


## Dokumentaatio

[Backlog ja aikakirjanpito](https://docs.google.com/spreadsheets/d/e/2PACX-1vT-c9lv_qbbtI2iUYnYm3j4XEcGpK-cvejJRi9k49gu4HiQ41ATS_wnY1VlinJPRadF8myDc4ngpZzG/pubhtml)


## DoD-määritelmä

Dod-määritelmä (täsmentyy vielä 0 sprintin aikana):

- koodi toimii kriteerien mukaisesti
- testikattavuus väh. 80 %
- koodin laatu on varmistettu (katselmoitu)
- pull request tehty & hyväksytty

## Käyttöohje

!HUOM tällä hetkellä nuo käyttäjä/salasana/jne ovat kovakoodatut. Tämä ei hyvä asia, mutta siihen palataan ensi sprintin yhteydessä.

Alla olevat ohjeet tehty Windows käyttäjälle. Saattavat hieman poiketa muille. Nämä pitää toki myös dokumentoida.

Tiedettyjä ongelmia: Mac ei tykkää postgresql:n helposta asennuksesta. Mm ohjeita [täällä](https://www.codementor.io/@engineerapart/getting-started-with-postgresql-on-mac-osx-are8jcopb)

Lataa ja asenna [Postgresql](https://www.postgresql.org/download/)
- Muista salasana. Tärkeä.
- Macilla Postgres kannattaa asentaa Homebrew'n kautta.

Lataa ja asenna [Node](https://nodejs.org/en/)

**WINDOWS:**
Luo tarvittu käyttäjä ja tietokanta Postgresql:iin: syötä seuraavat rivit komentoriviin:
- `$ psql -d postgres -U postgres`
- Syötä salasanasi
- `postgres=>CREATE ROLE taudinpurkaus WITH LOGIN PASSWORD 'kokeilu';`
- `postgres=>ALTER ROLE taudinpurkaus CREATEDB;`
- `postgres=>\q` 
- `$ psql -d postgres -U taudinpurkaus`
- syötä salasana (kokeilu)
- `postgres=>CREATE DATABASE taudinpurkaus;`
- `postgres=>\q`

**MAC:**
Luo tarvittu käyttäjä ja tietokanta Postgresql:iin: syötä seuraavat rivit komentoriviin:
- `$ psql postgres`
- Syötä salasanasi, jos sitä kysytään
- `postgres=>CREATE ROLE taudinpurkaus WITH LOGIN PASSWORD 'kokeilu';`
- `postgres=>ALTER ROLE taudinpurkaus CREATEDB;`
- `postgres=>\q`  
- `$ psql -d postgres -U taudinpurkaus`
- syötä salasana (kokeilu)
- `postgres=>CREATE DATABASE taudinpurkaus;`
- `postgres=>\q`

**LINUX:**
Luo tarvittu käyttäjä ja tietokanta Postgresql:iin: syötä seuraavat rivit komentoriviin:
- `$ sudo -i -u postgres psql`
- Syötä salasanasi
- `postgres=>CREATE ROLE taudinpurkaus WITH LOGIN PASSWORD 'kokeilu';`
- `postgres=>ALTER ROLE taudinpurkaus CREATEDB;`
- `postgres=>\q` 
- `$ psql -U taudinpurkaus -h 127.0.0.1 postgres`
- syötä salasana (kokeilu)
- `postgres=>CREATE DATABASE taudinpurkaus;`
- `postgres=>\q`

HUOM! Mikäli ensimmäisestä komennosta jättää psql pois, vaihtaa se käyttäjän postgreksi (komentorivillä näkyy muodossa postgres@<koneen_tunnus>). Takaisin omalle käyttäjälle (<käyttäjätunnus>@<koneen_tunnus>) pääsee kirjoittamalla komentoriville exit.


Lataa itse ohjelma/tämä branch

Käynnistä palvelin:
- mene kansioon backend 
- avaa komentorivi 
- syötä "node server.js" (anna tämän pyöriä niin kauan kun aiot käyttää ohjelmaa/tämä siis palvelimen käyttöönotto)

Käynnistä ohjelma
- mene kansioon frontend
- avaa komentorivi
- syötä "npm install"
- syötä "npm start"

#### Eslint

Käytetään Airbnb:n eslint konfiguraatiota. Dokumentaatio löytyy [täältä](https://github.com/airbnb/javascript)

Eslintin koodintarkistuksen voi suorittaa komennolla `npm run lint`

### Konttiympäristö

Lataa client täältä: https://mirror.openshift.com/pub/openshift-v4/clients/ocp/latest/ (valitse client omalle käyttöjärjestelmällesi)

Sijoita ohjelmabinääri oc jonnekin polkuun.

Varmista että olet yliopiston sisä / eteisverkossa, esim VPN.

Clientin asennuksen jälkeen kirjautumaan pääsee:

`oc login https://api.ocp-test-0.k8s.it.helsinki.fi:6443`

Komentorivi herjaa API tokenin puuttumisesta ja antaa linkin sen saamiseen. Avaa linkki ja mene Helsingin yliopiston kirjautumiseen ja syötä hy-tunnukset. Aja token komentorivillä, jonka jälkeen client osaa ottaa yhteyden oikeaan Openshiftiin.
