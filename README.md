# scrumflow
Nu skall ni få testa på att skapa ert egna projekt och arbeta med det i separata brancher baserat på er projekttavla. 

## Instruktioner
- En person i gruppen drar hem repot till sin dator, skapar ett nytt eget repo för gruppen och flyttar över filerna dit, samt pushar till det egna repot.
- Personen lägger till sina "kollegor" som collaborators
- Skapa ett nytt projekt som ni kopplar till ert repo
- Varje person i gruppen skapar ett nytt item var och lägger in informationen nedan. Diskutera även user story för varje feature och skriv med denna.
- Börja koda var för sig! Det är MYCKET viktigt att ni pratar med varandra om vad ni förväntar er av varandras funktioner.
- Innan ni pushar och gör en pull request MÅSTE ni veta att er kod fungerar. Testa därför koden med fakedata eller konsollanrop innan ni pushar.

### Items
#### Fetch Pokemons
* Skapa global array för pokemons
* Skapa en asynkron funktion som hämtar pokemons med fetch på https://santosnr6.github.io/Data/pokemons.json
* Spara ner pokemons i array

#### Fetch Pokemon Details
* Skapa funktion som tar emot en url i form av en text-sträng
* Använd strängen för att göra ett fetch-anrop
* Returnera svaret

#### Generate Pokemon
* Skapa knapp på html-sidan
* Läs in knapp och sätt en lyssnare på den som vid klicka anropar funktionen generate
* Skapa funktionen generate som slumpar fram en pokemon från arrayen pokemons
* Plocka ur url:en för den slumpade pokemonen
* Gör ett anrop till funktionen fetchPokemonsDetails och skicka med url:en från den slumpade pokemonen
* Svaren du får tillbaks skickar du sedan vidare till funktionen renderPokemonCard

#### Create Pokemon Card
* Skapa funktionen renderPokemonCard som tar emot parametern pokemon
* Pokemon är ett objekt så börja med att skriva ut pokemon i konsollen för att se vilka nycklar du behöver använda
* Skapa ett kort med pokemonens information
* Skapa en behållare i content-container som du kan lägga till ditt kort i

#### Skapa fler items efter hand. 
I ett scrum team får alla lägga till vad de vill.
