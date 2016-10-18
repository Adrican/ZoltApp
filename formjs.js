$(document).ready(function(){
	$(".btn1").click(function(){
		$('h3').addClass('titulos');
	});
});
$(document).ready(function() {
	$('input').focus(function() {
		$(this).css('outline-color', 'red'); 
        });

	});
	$(document).ready(function() {
		$( ".easterEgg" ).hide();
		function changeColor(){
		if ($('h1').hasClass('blanco')) {
			$('h1').removeClass('blanco');
			$('h1').addClass('negro');
			$('h2').removeClass('negro');
			$('h2').addClass('blanco');
			$( ".easterEgg" ).hide();
			
			
		}
		else {
			$('h1').removeClass('negro');
            $('h1').addClass('blanco');
			$('h2').removeClass('blanco');
			$('h2').addClass('negro');
		}
	}
	
	
	setInterval(changeColor, 1000);
	$(document).ready(function() {
	$(".foto").hide();
	$(".foto").fadeIn(3000);
	
	 
	});
});


var dia; 
var mes; 
var ano;
var suma; 
var valor2


function IsNumeric(valor) 
{ 
var log=valor.length; var sw="S"; 
for (x=0; x<log; x++) 
{ v1=valor.substr(x,1); 
v2 = parseInt(v1); 

if (isNaN(v2)) { sw= "N";} 
} 
if (sw=="S") {return true;} else {return false; } 
} 
var primerslap=false; 
var segundoslap=false; 
function formateafecha(fecha) 
{ 
var long = fecha.length; 

if ((long>=2) && (primerslap==false)) { dia=fecha.substr(0,2); 
if ((IsNumeric(dia)==true) && (dia<=31) && (dia!="00")) { fecha=fecha.substr(0,2)+"/"+fecha.substr(3,7); primerslap=true; } 
else { fecha=""; primerslap=false;} 
} 
else 
{ dia=fecha.substr(0,1); 
if (IsNumeric(dia)==false) 
{fecha="";} 
if ((long<=2) && (primerslap=true)) {fecha=fecha.substr(0,1); primerslap=false; } 
} 
if ((long>=5) && (segundoslap==false)) 
{ mes=fecha.substr(3,2); 
if ((IsNumeric(mes)==true) &&(mes<=12) && (mes!="00")) { fecha=fecha.substr(0,5)+"/"+fecha.substr(6,4); segundoslap=true; } 
else { fecha=fecha.substr(0,3);; segundoslap=false;} 
} 
else { if ((long<=5) && (segundoslap=true)) { fecha=fecha.substr(0,4); segundoslap=false; } } 
if (long>=7) 
{ ano=fecha.substr(6,4); 
if (IsNumeric(ano)==false) { fecha=fecha.substr(0,6); } 
else { if (long==10){ if ((ano==0) || (ano<=0000) || (ano>=9999)) { fecha=fecha.substr(0,6); } } } 
} 
if (long>=10) 
{ 
fecha=fecha.substr(0,10); 
dia=fecha.substr(0,2); 
mes=fecha.substr(3,2); 
ano=fecha.substr(6,4); 

if ( (ano%4 != 0) && (mes ==02) && (dia > 28) ) { fecha=fecha.substr(0,2)+"/"; } 
} 
return (fecha); 

}

function sumatorio() 
{ 
suma = parseInt(mes[0]) + parseInt(mes[1]) + parseInt(ano[0]) + parseInt(ano[1]) + + parseInt(ano[2]) + parseInt(ano[3]) + parseInt(dia[0]) + parseInt(dia[1]);
valor1 = suma.toString();
parseInt(valor1);
valor2 = parseInt(valor1[0]) + parseInt(valor1[1]);
valor3 = valor2.toString();



if (parseInt(valor3)==1) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 1</h3><br>Signo de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación. Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios. A veces son excesivamente firmes o agresivos, dominadores, impulsivos, egocéntricos, presuntuosos y obstinados. Aunque de naturaleza son afectuosos y amables, les cuesta mostrar sus sentimientos, siendo en este punto introvertidos y bastante reservados. <br><b>Compatibilidades del 1 (uno):</b> <br><b>El 1 es compatible con el 2:</b> buenas alianzas en el amor, el trabajo y asuntos sociales en general. <br><b>El 1 es compatible con el 5:</b> compatibles en habilidades.";

}
if (parseInt(valor3)==2) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 2</h3><br>Signo de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad. Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático. Es el número de los artistas y personas con sensibilidad y tendencias románticas. En el trabajo son buenos compañeros y pacientes, tienen buenas ideas para trabajar en equipo y no son proclives a llevar ellos mismos la iniciativa o acaparar el protagonismo. En el lado negativo son tímidos, pueden “ahogarse” en los detalles, generar algunos miedos y caer en depresión. Si encuentran la pareja adecuada pueden vivir y hacer vivir una gran historia de amor romántico durante muchos años. <br><b>Compatibilidades del 2 (dos):</b><br> <b>El 2 es compatible con el 6:</b> excelente alianza para el amor y formar un hogar. <br><b>El 2 es compatible con el 8:</b> una alianza más pragmática con mayor vocación de éxito en lo financiero (ej. Negocios).";

}
if (parseInt(valor3)==3) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 3</h3><br>Auto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos. A veces está asociado a la inspiración y a la inteligencia imaginativa con capacidades especiales. Son también personas con sentido del humor, y capaces de identificar y generar las ideas más importantes que pueden llegar a ser claves en las esferas del pensamiento, las instituciones o las empresas. En el lado negativo son proclives a la dispersión de sus esfuerzos, la exageración, a los proyectos inacabados, a la falta de dirección... <br><b>Compatibilidades del 3 </b><br><b>El 3 es compatible con el 6:</b> alianza mágica para la vida social y divertimento.<br><b> El 3 es compatible con el 8:</b> alianzas para hacer triunfar intereses y proyectos.";
}
if (parseInt(valor3)==4) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 4</h3><br> Fuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas. Aquellos llamados a tener y dentro del respeto a la ley el orden y la justicia en general. Su actuación en la legalidad les proporciona autoridad personal, el cumplimiento de sus obligaciones y el logro de éxitos y puestos de responsabilidad en las más altas esferas de la sociedad.<br> En el lado negativo: falta de imaginación, atrapado por el detalle, testarudo y de opiniones fijas, discutidor, lento a la hora de actuar, demasiado serio y en ocasiones confuso. <br><b>Compatibilidades del 4 (cuatro) </b><br><b>El 4 es compatible con el 4:</b> pese a la igualdad de planteamientos, hay garantía de éxito en la relación. <br><b>El 4 es compatible con el 9:</b> es una alianza de inteligencias, de compatibilidad de pensamiento.";
}
if (parseInt(valor3)==5) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 5</h3><br>Signo de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva. También es el número de la fortuna, la magia y la aventura. Son personas que les atrae lo desconocido, lo extraño, lo misterioso. En el lado negativo, demasiada inquietud, a veces descontento e insatisfecho, de temperamento tenso, suele tomar muchas decisiones precipitadas, impaciente, falto de aplicación a los temas. <br><b>Compatibilidades del 5 (cinco) </b><br><b>El 5 es compatible con el 6:</b> se estimulan mutuamente. <br><b>El 5 es compatible con el 8:</b> combinación de fuerza y generosidad.";
}
if (parseInt(valor3)==6) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 6</h3><br>Signo del amor, la responsabilidad, la comprensión, pero también de personas entrometidas y celosas. Es un número asociado a la honestidad y fidelidad. En lo positivo su fuerte sentido de la responsabilidad, artístico, equilibrados, comprensivos con los demás, humanitarios, generosos, amantes del hogar y de los asuntos domésticos, prestan ayuda a otros. Son personas de fiar, serias, formales y con sentido de la honradez. También son de trato amable con los demás. En el lado negativo, obstinados y testarudos, dominantes de la familia y los amigos, entrometidos, egocéntricos y susceptibles de la adulación. <br><b>Compatibilidades del 6 (seis)</b> <br><b>El 6 es compatible con el 4:</b> es una alianza armónica y duradera <br><b>El 6 es compatible con el 8:</b> una asociación ideal para negocios, proyectos o asuntos laborales.";
}
if (parseInt(valor3)==7) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 7</h3><br>Signo del pensamiento, la espiritualidad, la conciencia, el análisis psíquico, la sabiduría. El número del intelecto, el idealismo y la represión. Son personas amantes de la lectura, el estudio y las ansias por aprender. Tendentes a proyectar su vida en una esfera de idealismo y actividad intelectual. Habilidades para el análisis y la investigación y la inteligente búsqueda del conocimiento; mentalidad científica y con capacidad de inventiva; estudiosa, meditadora; de personalidad encantadora; amantes de la soledad y de la paz; perfeccionistas. En el lado negativo: motivos ocultos; muy reservado, les encanta argumentar con silencios o sarcasmos; tendencia al aislamiento, a posiciones inflexibles, les irritan las distracciones. <br><b>Compatibilidades del 7 (siete):</b> <br><b>El 7 es compatible con el 3:</b> es compatibilidad por complementariedad.<br> </b>El 7 es compatible con el 8:</b> alianza efectiva para lograr objetivos de todo tipo.";
}
if (parseInt(valor3)==8) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 8</h3><br>Signo del poder, la habilidad ejecutiva, la gestión, poder material y una tendencia al sacrificio pero también a no tener escrúpulos. Habilidades políticas, experto en manejar el poder y la autoridad, trabajan por causas y por alcanzar el reconocimiento, capacidad de decisión y mando. Simboliza la autosuficiencia, el éxito material y la firmeza de planteamientos. Son autoexigentes, ambiciosos y hábiles para alcanzar logros materiales tales como negocios, empresas, ganancias de todo tipo. En el lado negativo: son workaholic, excesivamente ambiciosos, carentes de instintos humanitarios, pueden gestionar mal el dinero, reprimir a subordinados, impacientarse con la gente en general, tendencia al estrés y al materialismo. <br><b>Compatibilidades del 8 (ocho): </b><br><b>El 8 es compatible con el 4:</b> para alianzas estratégicas en lo material.<br> <b>El 8 es compatible con el 9: </b>para alianzas menos materiales.";
}
if (parseInt(valor3)==9) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 9</h3><br> Signo del genio artístico, sentido humanitario, tendencia al romance y a lo emotivamente sentimental. Animadamente amistosos y simpáticos, desinteresados, interesados en hacer de buena gana y bien su trabajo. Talento artístico y para la escritura. El número de la persistencia, generosidad y capacidad de empuje. Tiene tendencia a perdonar los fallos de los demás. Capaces para iniciar algunos proyectos y trabajar con persistencia hasta su culminación. En el lado negativo: Auto-adulación, intereses dispersos, posesivos, descuidados con las finanzas, necesitan acaparar la atención.<br> Compatibilidades del 9 (nueve) </b><br><b>El 9 es compatible con el 9:</b> compatibilidad con los de su mismo número. <br><b>El 9 es compatible con el 1:</b> alianza para proyectos e ideas.";
}
if (parseInt(valor3)==10) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 1</h3><br>Signo de la creatividad, independencia, originalidad, sentido del yo y autosuficiencia. Naturaleza individualista y agresiva. Iniciadores de acciones, espíritu pionero, coraje, extraordinaria voluntad y determinación. Es símbolo del liderazgo, aquellos con capacidades y habilidades para el mando. Ambiciosos y dispuestos a asumir riesgos para llegar a la cima. Llamados a destacar en el trabajo y los negocios. A veces son excesivamente firmes o agresivos, dominadores, impulsivos, egocéntricos, presuntuosos y obstinados. Aunque de naturaleza son afectuosos y amables, les cuesta mostrar sus sentimientos, siendo en este punto introvertidos y bastante reservados. <br><b>Compatibilidades del 1 (uno):</b> <br><b>El 1 es compatible con el 2:</b> buenas alianzas en el amor, el trabajo y asuntos sociales en general. <br><b>El 1 es compatible con el 5:</b> compatibles en habilidades.";

}
if (parseInt(valor3)==11) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 2</h3><br>Signo de la empatía, cooperación, adaptabilidad, consideración hacia los demás, supersensibilidad hacia las necesidades de los demás. Símbolo del equilibrio, la unión y la receptividad. Es buen socio, compañero o pareja; también hace un magnífico papel como arbitro o mediador: Es modesto, sincero, influenciable espiritualmente y buen diplomático. Es el número de los artistas y personas con sensibilidad y tendencias románticas. En el trabajo son buenos compañeros y pacientes, tienen buenas ideas para trabajar en equipo y no son proclives a llevar ellos mismos la iniciativa o acaparar el protagonismo. En el lado negativo son tímidos, pueden “ahogarse” en los detalles, generar algunos miedos y caer en depresión. Si encuentran la pareja adecuada pueden vivir y hacer vivir una gran historia de amor romántico durante muchos años. <br><b>Compatibilidades del 2 (dos):</b><br> <b>El 2 es compatible con el 6:</b> excelente alianza para el amor y formar un hogar. <br><b>El 2 es compatible con el 8:</b> una alianza más pragmática con mayor vocación de éxito en lo financiero (ej. Negocios).";

}
if (parseInt(valor3)==12) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 3</h3><br>Auto-expresivo en muchas vertientes y con capacidad comunicativa; Es el signo de la expresión artística, sociabilidad, simpatía, superficialidad y espíritu derrochador. Símbolo de la comunicación, la interacción y la neutralidad. Incansable optimismo, felicidad y del disfrute de la vida. Pueden ser amantes divertidos. A veces está asociado a la inspiración y a la inteligencia imaginativa con capacidades especiales. Son también personas con sentido del humor, y capaces de identificar y generar las ideas más importantes que pueden llegar a ser claves en las esferas del pensamiento, las instituciones o las empresas. En el lado negativo son proclives a la dispersión de sus esfuerzos, la exageración, a los proyectos inacabados, a la falta de dirección... <br><b>Compatibilidades del 3 </b><br><b>El 3 es compatible con el 6:</b> alianza mágica para la vida social y divertimento.<br><b> El 3 es compatible con el 8:</b> alianzas para hacer triunfar intereses y proyectos.";
}
if (parseInt(valor3)==13) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 4</h3><br> Fuerte sentido del orden y los valores. Es el signo de lo práctico, la lealtad, la rigidez y la represión. También es símbolo de la creación, de la lucha contra los límites, de la mentalidad científica, la atención al detalle, capaz de alcanzar logros importantes y con ingenio para la organización. Finas habilidades administrativas. Aquellos llamados a tener y dentro del respeto a la ley el orden y la justicia en general. Su actuación en la legalidad les proporciona autoridad personal, el cumplimiento de sus obligaciones y el logro de éxitos y puestos de responsabilidad en las más altas esferas de la sociedad.<br> En el lado negativo: falta de imaginación, atrapado por el detalle, testarudo y de opiniones fijas, discutidor, lento a la hora de actuar, demasiado serio y en ocasiones confuso. <br><b>Compatibilidades del 4 (cuatro) </b><br><b>El 4 es compatible con el 4:</b> pese a la igualdad de planteamientos, hay garantía de éxito en la relación. <br><b>El 4 es compatible con el 9:</b> es una alianza de inteligencias, de compatibilidad de pensamiento.";
}
if (parseInt(valor3)==14) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 5</h3><br>Signo de la acción y la inquietud. Es el símbolo de la libertad, la adaptabilidad, el espíritu viajero y aventurero, pero también de la inconsistencia y del abuso de los sentidos. Expansivo y sociable, de nuevas y visionarias ideas; de pensamientos rápidos, polifacético, curioso y explorador; ingenioso a la hora de utilizar la libertad de forma constructiva. También es el número de la fortuna, la magia y la aventura. Son personas que les atrae lo desconocido, lo extraño, lo misterioso. En el lado negativo, demasiada inquietud, a veces descontento e insatisfecho, de temperamento tenso, suele tomar muchas decisiones precipitadas, impaciente, falto de aplicación a los temas. <br><b>Compatibilidades del 5 (cinco) </b><br><b>El 5 es compatible con el 6:</b> se estimulan mutuamente. <br><b>El 5 es compatible con el 8:</b> combinación de fuerza y generosidad.";
}
if (parseInt(valor3)==15) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 6</h3><br>Signo del amor, la responsabilidad, la comprensión, pero también de personas entrometidas y celosas. Es un número asociado a la honestidad y fidelidad. En lo positivo su fuerte sentido de la responsabilidad, artístico, equilibrados, comprensivos con los demás, humanitarios, generosos, amantes del hogar y de los asuntos domésticos, prestan ayuda a otros. Son personas de fiar, serias, formales y con sentido de la honradez. También son de trato amable con los demás. En el lado negativo, obstinados y testarudos, dominantes de la familia y los amigos, entrometidos, egocéntricos y susceptibles de la adulación. <br><b>Compatibilidades del 6 (seis)</b> <br><b>El 6 es compatible con el 4:</b> es una alianza armónica y duradera <br><b>El 6 es compatible con el 8:</b> una asociación ideal para negocios, proyectos o asuntos laborales.";
}
if (parseInt(valor3)==16) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 7</h3><br>Signo del pensamiento, la espiritualidad, la conciencia, el análisis psíquico, la sabiduría. El número del intelecto, el idealismo y la represión. Son personas amantes de la lectura, el estudio y las ansias por aprender. Tendentes a proyectar su vida en una esfera de idealismo y actividad intelectual. Habilidades para el análisis y la investigación y la inteligente búsqueda del conocimiento; mentalidad científica y con capacidad de inventiva; estudiosa, meditadora; de personalidad encantadora; amantes de la soledad y de la paz; perfeccionistas. En el lado negativo: motivos ocultos; muy reservado, les encanta argumentar con silencios o sarcasmos; tendencia al aislamiento, a posiciones inflexibles, les irritan las distracciones. <br><b>Compatibilidades del 7 (siete):</b> <br><b>El 7 es compatible con el 3:</b> es compatibilidad por complementariedad.<br> </b>El 7 es compatible con el 8:</b> alianza efectiva para lograr objetivos de todo tipo.";
}
if (parseInt(valor3)==17) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 8</h3><br>Signo del poder, la habilidad ejecutiva, la gestión, poder material y una tendencia al sacrificio pero también a no tener escrúpulos. Habilidades políticas, experto en manejar el poder y la autoridad, trabajan por causas y por alcanzar el reconocimiento, capacidad de decisión y mando. Simboliza la autosuficiencia, el éxito material y la firmeza de planteamientos. Son autoexigentes, ambiciosos y hábiles para alcanzar logros materiales tales como negocios, empresas, ganancias de todo tipo. En el lado negativo: son workaholic, excesivamente ambiciosos, carentes de instintos humanitarios, pueden gestionar mal el dinero, reprimir a subordinados, impacientarse con la gente en general, tendencia al estrés y al materialismo. <br><b>Compatibilidades del 8 (ocho): </b><br><b>El 8 es compatible con el 4:</b> para alianzas estratégicas en lo material.<br> <b>El 8 es compatible con el 9: </b>para alianzas menos materiales.";
}
if (parseInt(valor3)==18) 
{ 
escribir = document.getElementById("num1");
escribir.innerHTML = "<h3>Su numero es el 9</h3><br> Signo del genio artístico, sentido humanitario, tendencia al romance y a lo emotivamente sentimental. Animadamente amistosos y simpáticos, desinteresados, interesados en hacer de buena gana y bien su trabajo. Talento artístico y para la escritura. El número de la persistencia, generosidad y capacidad de empuje. Tiene tendencia a perdonar los fallos de los demás. Capaces para iniciar algunos proyectos y trabajar con persistencia hasta su culminación. En el lado negativo: Auto-adulación, intereses dispersos, posesivos, descuidados con las finanzas, necesitan acaparar la atención.<br> Compatibilidades del 9 (nueve) </b><br><b>El 9 es compatible con el 9:</b> compatibilidad con los de su mismo número. <br><b>El 9 es compatible con el 1:</b> alianza para proyectos e ideas.";
}
if (dia==26 && mes==04 && ano==1903) 
{ 
$( ".easterEgg" ).show();

}
}
