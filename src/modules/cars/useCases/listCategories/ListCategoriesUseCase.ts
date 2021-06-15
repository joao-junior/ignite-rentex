import { Category } from "../../entities/Category";
import { ICateagoriesRepository } from "../../repositories/ICateagoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICateagoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
