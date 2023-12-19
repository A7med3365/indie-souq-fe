//ts-check
import React from 'react'
import { Link } from '@nextui-org/react';
import { ShareIcon, EditIcon, DeleteIcon, Status } from './DashboardIcons'

export default function ProjectCard({ title, isPub, key, id }) {
  return (
    <div className="w-full h-[20dvh] border flex rounded-3xl px-8" key={key}>
      <p className=" flex-1 text-4xl ml-3 my-auto">{title}</p>
      <div className="flex gap-4 my-auto mr-10">
        <ShareIcon />
        <Link href={`/project/${id}`}>
          <EditIcon />
        </Link>
        <DeleteIcon />
      </div>
      <Status isPub={isPub} />
    </div>
  );
}
