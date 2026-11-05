import React from "react";
/** Reusable section heading. Pass copy through props rather than duplicating markup. */
export function SectionHeading({ eyebrow, title, description, centered = false, }) {
    return (<div className={`mb-12 max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
      <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1.8px] text-daqube-silver">
        <span className="h-[7px] w-[7px] rounded-full bg-daqube-crimson shadow-[0_0_10px_#EC5E27]"/>
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-1.5px] text-daqube-silver-bright md:text-5xl">
        {title}
      </h2>
      {description && (<p className="mt-4 max-w-2xl text-base leading-8 text-daqube-muted">
          {description}
        </p>)}
    </div>);
}
