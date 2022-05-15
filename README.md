# Cloud_Computing_Library_BE
Proiect Cloud Computing – Library With Friends- Documentatie

Titlu al aplicatiei: Library with Friends Nume si prenume student: Craciun Pavel-Cristian Grupa:1117 Link Catre aplicatie Heroku: https://immense-temple-57554.herokuapp.com/ Back-end repository: https://github.com/itsPavelXmas/Cloud_Computing_Librarie Front-end repository: https://github.com/itsPavelXmas/Cloud_Computing_Library_FE 
link video: https://www.youtube.com/watch?v=ybRrvy8Sh04&ab_channel=Pavone
Introducere

Aceasta aplicatie reprezinta o platforma de librarie unde cartile ce sunt evidentiate pot fi trimise pe mail prietenilor pentru a starni curiozitatea despre acestea. Aplicatia a fost create utilizand Node.Js, Express, React.js, MySql, Google Translate API, SendGrid si Text-to-Speech Google API. Aspectul este unul minimalist folosind HTML si CSS. Totodata, aceasta a fost hostata pe Heroku. Servicii

Serviciile folosite in Cloud prezente in acest proiect sunt Google Translate API si Text-to-Speech API folosind Google Cloud Platform. Totodata, Layerul de persistenta este evidentiat de o baza de date MySql stocata in Google Cloud Platform, deoarece am ales sa nu folosesc o baza de date locala. Pentru partea de mail uri am folosit SendGrid pentru ca utilizatorii sa impartaseasca cu prietenii acestora entuziasmul pentru o anumita carte.

API Text-to-Speech API de la Google este ideal pentru orice aplicație care redă sunetul vorbirii umane către utilizatori. Acesta permite să convertim șiruri, cuvinte și propoziții arbitrare în sunetul unei persoane care vorbește aceleași lucruri. Aplicația poate efectua o acțiune și apoi poate oferi utilizatorului vorbire umană ca feedback. Din acest motiv am ales ca pentru descrierea unei carti sa poata fi citita de un “asistent”.
Google Translate API de la Google pentru a putea traduce mail ul intr-o limba anume ce va fi trimis unui utilizator fiind folosit impreuna cu SMPT-ul de la SendGrid

Flux de date

Aplicatia este una CRUD iar baza de date MySql unde pastram datele despre Carti( titlu, autor, editura) descriere_carte( descriere si id-ul cartii afferent), mesajele ( nume, mail – distribuitor, mail- prieten si continutul mail ului). Capturi ecrane

![http1](https://user-images.githubusercontent.com/72074376/168486428-8da3d124-528b-49f0-ad90-1a78028964a9.png)
![http2](https://user-images.githubusercontent.com/72074376/168486430-6675b99f-e6ee-444e-af9b-6c02ea480b12.png)
![http3](https://user-images.githubusercontent.com/72074376/168486431-5c4be3a8-d3ad-4ade-9e91-69b525fdb3da.png)
![http4](https://user-images.githubusercontent.com/72074376/168486432-21baf95b-4519-4f74-9bc3-e115dddd34d7.png)
![interfata](https://user-images.githubusercontent.com/72074376/168486433-5bacb4bc-8fcf-4e47-8481-3a7668e2974b.png)
![Mail](https://user-images.githubusercontent.com/72074376/168486434-96bc4cf7-7486-426a-931a-e7180beac834.png)
