# SMARAGDINE MIT DEM MINIMALISTICHEN PROGRAMM ERKLÄRT

In dieser Sektion beschreibe ich die basische Satzstruktur des Smaragdines, aber es ist keine komplette Grammatik. Die Hauptsatzstruktur ist `SUBJECT + VERB + OBJEKT` in deklarativen Sätzen. Es bedeutet, dass die Komplemente der Verben ihnen folgen. Die Adjektive folgen den Substantiven, die sie beschreiben. 

Es gibt Kongruenz zwischen dem Verb und seinem grammatischen Subjekt (Zahl und Person) und auch zwischen den Adjektiven und den Substantiven, die beschrieben werden, innerhalb der NP (Kasus, Genus und Zahl).

In Fragen des Artes „Yes-No-Question“ geht das Verb dem Subjekt voraus, danach ergibt es die `VERB + SUBJEKT-`Satzstruktur. Unähnlich zu Deutsch gibt es keinen Artikel in Smaragdine, weder bestimmten noch unbestimmten.

## DAS MINIMALISTISCHE PROGRAMM

In dieser Sektion zeige ich Ihnen einen kurzen Satz in Smaragdine und wie das Minimalistische Programm seine Struktur erklärt. Der Satz, den ich benutzen will, ist dieser: **моj жыкь ψат вляку лупу** „Mein Freund schreibt ein großes Buch.“ Natürlich wird der unbestimmte Artikel „ein“ nicht übersetzt.  

```
Numeration: „моj“ (mein), „жыкь“ (Freund), „ψат“ (schreibt), „вляку“ (groß), 
„лупу“ (Buch), INFL
	Derivation:
	* Select - „вляку“, „лупу“
	* Merge - „вляку“, „лупу“ -> NP[вляку лупу]
	* Select - „ψат“, NP[вляку лупу]
	* Merge - „ψат“, NP[вляку лупу] -> V'[ψат NP[вляку лупу]]
```

Durch diesen Prozess haben wir ein fast fertiges VP, aber wir brauchen noch das Subjekt des Satzes. Man muss „Select“ und „Merge“ innerhalb des NP ausführen, vor dem „Merge“ mit `V’`.

```
* Select - „моj“, „жыкь“
* Merge - „моj“, „жыкь“ -> NP[моj жыкь]
* Select - NP[моj жыкь], V'[ψат NP[вляку лупу]]
* Merge - NP[моj жыкь], V'[ψат NP[вляку лупу]] -> 
	VP[NP[моj жыкь] V'[ψат NP[вляку лупу]]]
```

Dieser Prozess ergibt das VP `VP[NP[моj жыкь] V'[ψат NP[вляку лупу]]]`.

```
* Select - INFL, VP[NP[моj жыкь] V'[ψат NP[вляку лупу]]]
* Merge - INFL, VP[NP[моj жыкь] V'[ψат NP[вляку лупу]]] -> 
	I'[INFL[VP[NP[моj жыкь] V'[ψат NP[вляку лупу]]]]]
	
```

Denn führen wir „Move“ `NP[моj жыкь]` zu IP aus.

```
* Move - NP[моj жыкь] -> IP[NP[моj жыкь]I'[INFL[VP[t V'[ψат NP[вляку лупу]]]]]]
	
```

Das Verb gibt seinem Objekt den Akkusativ, weil Smaragdine eine nominativ-akkusative Sprache ist. Denn wenn das Subject „Move“ zu IP ausführt, gibt INFL ihm Nominativ. Man findet die Kongruenz zwischen dem Verb und seinem Subjekt und die Informationen über Tempus innerhalb INFL.

## DIE SATZSTRUKTUR FÜR „YES-NO-QUESTIONS“

In Fragen müssen wir das Verb in den CP-Spezifikator bringen, um die VSO-Satzstruktur (typisch für die Yes-No-Questions in Smaragdine) zu ergeben. Das *t* markiert die originale Stelle der Elemente nach der „Move“-Operation.

```
* Move - V[ψат] -> CP[V[ψат]IP[NP[моj жыкь]I'[INFL[VP[t V'[t NP[вляку лупу]]]]]]]
	
```

Dieser Prozess ergibt für uns die Frage **ψат моj жыкь вляку лупу¿** „Schreibt mein Freund ein großes Buch?“

## RELATIVSÄTZE

Das Pronomen oder die Relativpartikel **шо** steht am Anfang des Relativsatzes. Diese Relativsätze stehen nach dem Substantiv oder nach dem Element, die davon beschrieben werden.

Samaragdine ist hauptsächlich eine Null-Kopula-Sprache, wie Russisch und Arabisch z. B., und es bedeutet, dass die Kopula Ø ist. Erstens führen wir „Merge“ zwischen dieser Null-Kopula und dem Adjektiv `[AP вякищ]` aus. Es ist das Prädikat unseres Satzes. Um das Subjekt zu ergeben, dürfen wir den Relativsatz vor dem „Merge“ mit ihm bauen.

```
[T' Ø [AP вякищ]]
```

Zuerst führen wir „Merge“ aus, um das `[DP моj жыкь]` zu ergeben, dann führen wir „Merge“ zwischen diesem DP und dem Verb aus. Das Resultat ist `VP[[DP моj жыкь][V ψат]]`. Es gibt aber eine Regel in Smaragdine: Der Relativsatz muss `VERB+SUBJEKT` sein. Deswegen geht das Verb in IP, um vor dem Subjekt zu stehen.

```
[IP ψат VP[[DP моj жыкь][V t]]]
```

Als шо nur ein Partikel ist, sozusagen kein Relativpronomen, steht es in Spec-CP. Diese Partikel verbindet diesen Teilsatz zum Element im Hauptsatz, das er beschreibt.

```
[CP шо [IP ψат VP[[DP моj жыкь][V t]]]]
```

Nun führen wir „Merge“ zwischen dieser CP und dem Element aus, das dieser Teilsatz beschreibt. In dieser Situation, `[NP луп]`.

```
[NP луп [CP шо [IP ψат VP[[DP моj жыкь][V t]]]]]
```

Endlich führen wir „Merge“ aus, zwischen dieser NP und dem Prädikat, um den Satz zu ergeben.

```
[TP [NP луп [CP шо [IP ψат VP[[DP моj жыкь][V t]]]]][T' Ø [AP вякищ]]]
```
