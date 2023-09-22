# Microservices

## Fundamentals

- The number one challenge when running microservices is managing the data between services
- With microservices, each service gets its own database. Services will never reach into another services database. This is because each service should run independently of the other services. If one service crashes, it shouldn’t crash the other services
- Services should not communicate directly with one another. This implies that if one service crashes, it can crash the another
- Asynchronous communication is when something happens in one service, and it emits an event. Other services will be notified of the event and will react to it if its relevant.
