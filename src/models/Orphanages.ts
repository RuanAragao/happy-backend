// Para uso dos decorators é preciso habilitar "Experimental Options" no tsconfig.json
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

// Decorator dizendo que a classe a seguir é uma entidade da tabela "orphanages"
@Entity('orphanages')
export default class Orphanage {
  // Coluna primaria com auto incremento
  @PrimaryGeneratedColumn('increment')
  id: number;

  // Decorator informando que é uma coluna
  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  open_on_weekends: boolean;
}