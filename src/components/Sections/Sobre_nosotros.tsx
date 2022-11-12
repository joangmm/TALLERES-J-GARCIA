import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {Sobre_nosotrosData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Sobre_nosotros: FC = memo(() => {
  const {profileImageSrc, description, reparations, Sobre_nosotrosItems} = Sobre_nosotrosData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Sobre_nosotros}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-72 md:w-72">
              <a href="https://www.google.com/maps/place/Talleres+J.Garc%C3%ADa/@41.4502758,2.2054594,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4bc92f12ba333:0xcc610dfa3108bad0!8m2!3d41.4502758!4d2.2076481/">
                <Image alt="Sobre_nosotros-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
              </a>
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6 ml-20', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">Tu taller de confianza</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
            <br/>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {reparations.map(({text}, idx) => (
                <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                  <span className=" text-sm text-gray-300">{text}</span>
                </li>
            ))}
            </ul>
            <br/>
          </div>
          
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {Sobre_nosotrosItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <a href="https://www.google.com/maps/place/Talleres+J.Garc%C3%ADa/@41.4502758,2.2054594,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4bc92f12ba333:0xcc610dfa3108bad0!8m2!3d41.4502758!4d2.2076481/">
                  <span className="text-sm font-bold text-white">{label}:</span>
                  <span className=" text-sm text-orange-500">{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

Sobre_nosotros.displayName = 'Sobre_nosotros';
export default Sobre_nosotros;
