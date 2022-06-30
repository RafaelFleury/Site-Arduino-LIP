// C++ code
//
int estadoBotao = 0;

void setup()
{
  pinMode(12, INPUT);
  pinMode(13, OUTPUT);
}

void loop()
{
  estadoBotao = digitalRead(12);
  if (estadoBotao == HIGH) {
    digitalWrite(13, HIGH);
  } else {
    digitalWrite(13, LOW);
  }
  delay(10); // Delay a little bit to improve simulation performance
}