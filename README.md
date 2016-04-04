# CSS
CSS Projects

### Git-kommandoer
Skrevet med tanke på en linux-konsoll (bash).

* Klone repository:
	* Finn et directory der du vil opprette din lokale klone av prosjektet
	* `git clone <adressen til repoen>`
* Oppdatere repository:
	* **Pass på at du er i master!**
	* `git pull origin`
	* *Husk å oppdatere regelmessig*
* **Liste branches:**
	* **`git branch` for lokale branches**
	* `git branch -r` for å vise remote branches
	* `git branch -a` for å også vise remote branches i repoen
* **Sjekke status på branchen/commiten du jobber i:**
	* **`git status`**
* **Sjekke commit-loggen på branchen du er i:**
	* **`git log`**
* Lage ny branch:
	* `git branch <ny_branch_navn>`
* Bytte branch:
	* `git checkout <branch_navn>`
* Commite til repoen:
	1. **Sjekk at du er på rett branch!**
	* `git add -A` eller `git add --all` legger til alle filene du har laget/modifisert i commiten din. Ofte fungerer og `git add .`, men noen ganger er ikke det tilstrekkelig.
	* `git commit -m "<commit-message>"` commiter (dvs. lager et checkpoint) med alle filene du added til commiten på denne branchen
	* `git push --set-upstream origin <branch_navn>` pusher branchen med commiten din opp til GitHub
	* Gå til GitHub, og så vil du se at branchen din er blitt lagt til. Trykk så på "Compare & pull request" for å forespør at branchen din skal merges inn i master
* Rebase en branch (få alle de siste endringer fra master, men behold dine egne fra din branch):
	1. Commit alt til branchen din, se punktet over for det, bare minus "push"-delen.
	* `git checkout master` bytter til master-branchen
	* `git pull origin` for å oppdatere master til den siste i repoen
	* `git checkout <din-branch>` for å bytte tilbake til din branch
	* `git rebase master` for å legge til de siste endringer i master "under" dine endringer
