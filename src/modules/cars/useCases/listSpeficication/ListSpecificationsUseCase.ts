import { Specification } from "../../entities/Specification";
import { ISpecificationRepository } from "../../repositories/ISpecificatiosRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    const specifications = this.specificationRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
