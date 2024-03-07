/* Começamos por capturar o que foi definido na caixa textarea e no event do teclado verificar Maiusculas e acentos */

const textarea = document.querySelector(".item1-input-text");
  
	textarea.addEventListener("input", function (event) {
	 const inputValue = event.target.value;

		// Verifica se há letras maiúsculas ou com acentos
		if (
			/[A-ZÀ-Ú]/.test(inputValue) ||
			/[áàãâäéèêëíìîïóòõôöúùûü]/.test(inputValue)
		) {
			alert("Por favor, insira apenas letras minúsculas e sem acento.");
			event.target.value = ""; // Limpa o campo
		}
	});


// Função - criptografar vogais
function replaceLetters(data) {
	// Divide o texto em um array de caracteres
	let caracteres = data.split("");

	// Percorre o array de caracteres
	for (let i = 0; i < caracteres.length; i++) {
		// Substitui as letras conforme necessário
		switch (caracteres[i]) {
			case "e":
				caracteres[i] = "enter";
				break;
			case "i":
				caracteres[i] = "imes";
				break;
			case "a":
				caracteres[i] = "ai";
				break;
			case "o":
				caracteres[i] = "ober";
				break;
			case "u":
				caracteres[i] = "ufat";
				break;			
		}
	}

	// Reconstroi a palavra/frase
	let textModified = caracteres.join("");

	return textModified;
}

// Função - Criptografar
function getEncrypt() {
	const textarea = document.querySelector(".item1-input-text");
  	
  let data = textarea.value;

	// Limpar o texto digitado no textarea
	textarea.value = "";

	// Substituir as letras conforme as regras especificadas
	let newData = replaceLetters(data);

	document.querySelector(".result").innerHTML = newData;

	// Exibir o bloco oculto(Botão copy)
	document.querySelector(".copyButton").style.display = "block";

	// Ocultar a imagem do box Right
	document.querySelector(".item2-right-img").style.display = "none";
  // Exibe a imagem 2 do box Right
	//document.querySelector(".item2-right-img2").style.display = "block";
	// Ocultar o texto do box Right
	document.querySelector(".item2-box-text").style.display = "none";
}

function getDecrypt(data) {
	// Array contendo as letras criptografadas
	const encryptedLetters = ["enter", "imes", "ai", "ober", "ufat"];
	// Array contendo as letras originais
	const originalLetters = ["e", "i", "a", "o", "u"];

	// loop sobre as letras criptografadas e as substitui pelas originais
	for (let i = 0; i < encryptedLetters.length; i++) {
		const regex = new RegExp(encryptedLetters[i], "g");
		data = data.replace(regex, originalLetters[i]);
	}
	// Escreve o resultado no campo específico
	document.querySelector(".result").innerHTML = data;

	// Exibe o bloco oculto
	document.querySelector(".copyButton").style.display = "block";

	// Oculta a imagem do box Right
	document.querySelector(".item2-right-img").style.display = "none";
	// Oculta o texto do box Right
	document.querySelector(".item2-box-text").style.display = "none";

	// Limpar o texto no input textarea
	textarea.value = "";
}

// Função para copiar o conteúdo da class <result> para a área de transferência
function copyToClipboard() {
	let element = document.querySelector(".result").innerHTML;
	const textarea = document.querySelector(".item1-input-text"); // área de transferência
	let data = textarea.value; // Valor a ser inserido na área de transferência
	// Antes limpa o texto digitado no input textarea
	textarea.value = "";

	// Chama a função para copiar na área de transferência o conteúdo de "element" no parametro
	paste(element);

	// Limpa o conteúdo antes na class .result
	document.querySelector(".result").innerHTML = "";
	// Oculto o botão da class copyButton
	document.querySelector(".copyButton").style.display = "none";
}

// Função - copiar o conteúdo para área de transferência
function paste(element) {
	// Aqui eu vejo se a class em questão não está vazia ou undefined para realizar a ação de click no campo
	const res = document.querySelector(".item1-input-text").innerHTML;

	if (res != "" || res != undefined) {
		document
			.querySelector(".item1-input-text")
			.addEventListener("click", function () {
				document.querySelector(".item1-input-text").value = element; // Populo o campo com odados da class .result
				// Exibir a imagem do box Right
				document.querySelector(".item2-right-img").style.display = "block";
				// Exibir o texto do box Right
				document.querySelector(".item2-box-text").style.display = "block";
			});
	}
}
