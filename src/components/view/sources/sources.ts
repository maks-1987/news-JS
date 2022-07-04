import { INews, SourcesTitle } from '../../../types/types';
import './sources.css';

class Sources implements INews {
  draw(data: SourcesTitle[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}

export default Sources;
