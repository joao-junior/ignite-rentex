import { Category } from "../../model/Category";
import { ICateagoriesRepository } from "../../repositories/ICateagoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICateagoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
