#include "Wire.h"

#define ledPin 7 // numero do pino onde o LED esta conectado
  
  
// endereco do modulo slave que pode ser um valor de 0 a 255
#define myAdress 0x08

void setup() {
  // ingressa ao barramento I2C com o endereço definido no myAdress (0x08)
  Wire.begin(myAdress);

  //Registra um evento para ser chamado quando chegar algum dado via I2C
  Wire.onReceive(receiveEvent);

  pinMode(ledPin, OUTPUT);  // configura o pino do LED como saida
}

void loop() {
  // nada para ser exexutado
}

// funcao executada sempre que algum dado e recebido no barramento I2C
// vide "void setup()"
void receiveEvent(int howMany) {
  // verifica se existem dados para serem lidos no barramento I2C
  if (Wire.available()) {
    // le o byte recebido
    char received = Wire.read();

    // se o byte recebido for igual a 0, apaga o LED
    if (received == 0) {
      digitalWrite(ledPin, LOW);
    }

    // se o byte recebido for igual a 1 acende o LED
    if (received == 1) {
      digitalWrite(ledPin, HIGH);
    }
  }
}

