// Para uso dos decorators é preciso habilitar "Experimental Options" no tsconfig.json
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Orphanage from './Orphanages';

// Decorator dizendo que a classe a seguir é uma entidade da tabela "orphanages"
@Entity('images')
export default class Image {
  // Coluna primaria com auto incremento
  @PrimaryGeneratedColumn('increment')
  id: number;

  // Decorator informando que é uma coluna
  @Column()
  path: string;

  // Relacionamento
  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}