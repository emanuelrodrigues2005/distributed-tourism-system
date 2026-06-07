import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { RmqService } from "./rmq.service";

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: "ANALYTICS_SERVICE",
        useFactory: () => ({
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RMQ_URL ?? "amqp://guest:guest@localhost:5672"],
            queue: "analytics_queue",
            queueOptions: {
              durable: true,
            },
          },
        }),
      },
    ]),
  ],
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {}
